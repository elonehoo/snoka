import { reactive } from '@vue/reactivity'
import type { ReactiveFile } from './file'
import type { ReactiveFileSystemOptions } from './options'

export interface Context {
  options: ReactiveFileSystemOptions
  state: {
    files: { [path: string]: ReactiveFile }
  }
  fsQueue: Promise<unknown>[]
}

export function createContext(options: ReactiveFileSystemOptions): Context {
  return {
    options,
    state: reactive({
      files: {},
    }),
    fsQueue: [],
  }
}
