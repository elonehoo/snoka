import type { ReactiveEffect } from '@vue/reactivity'
import {
  effect as rawEffect,
  stop as stopEffect,
} from '@vue/reactivity'
import type { ReactiveFileSystemOptions } from './options'
import { createContext } from './context'
import { createFileWatcher } from './watcher'
import { createReactiveFile } from './file'

export async function createReactiveFileSystem(options: ReactiveFileSystemOptions) {
  const ctx = createContext(options)

  const watcher = await createFileWatcher(ctx)

  const effects: ReactiveEffect<unknown>[] = []

  function effect(callback: () => unknown) {
    const e = rawEffect(callback)
    // @ts-expect-error error
    effects.push(e)
    return e
  }

  function createFile(relativePath: string, content: string = null) {
    const file = ctx.state.files[relativePath] || createReactiveFile(ctx, relativePath)
    if (content != null)
      file.content = content

    return file
  }

  async function destroy() {
    for (const e of effects) {
      // @ts-expect-error error
      stopEffect(e)
    }
    effects.length = 0
    await watcher.close()
    await Promise.all(ctx.fsQueue)
  }

  return {
    state: ctx.state,
    get files() {
      return ctx.state.files
    },
    effect,
    createFile,
    destroy,
  }
}
