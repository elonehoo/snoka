import { ViteNodeRunner } from 'vite-node/client'
import type { ViteNodeResolveId, ViteNodeRunnerOptions } from 'vite-node'
import { mockedModules } from './mocked-files.js'
import { createSnokaGlobal } from './global/index.js'

export interface ExecuteFileOptions extends ViteNodeRunnerOptions {
  files: string[]
  globals: Record<string, any>
  resolveId: (id: string, importer?: string) => Promise<ViteNodeResolveId | null>
}

export async function execute(options: ExecuteFileOptions) {
  class Runner extends ViteNodeRunner {
    prepareContext(context: Record<string, any>) {
      const fsPath = context.__filename
      const request = context.__vite_ssr_import__

      const snokaGlobals = createSnokaGlobal({
        filename: fsPath,
      })

      // @snoka/test package stub
      const snokaTestStub = () => ({
        ...snokaGlobals,
        ...options.globals,
      })

      context.__vite_ssr_import__ = async (dep: string) => {
        if (dep.includes('@snoka/test') || dep.includes('test'))
          return snokaTestStub()

        const resolvedId = await options.resolveId(dep, fsPath)
        if (resolvedId && mockedModules.has(resolvedId.id))
          return Promise.resolve(mockedModules.get(resolvedId.id))

        return request(dep)
      }

      Object.assign(context, {
        ...options.globals,
        snoka: snokaGlobals,
      })

      return context
    }
  }

  const runner = new Runner(options)
  const result = []
  for (const file of options.files)
    result.push(await runner.executeFile(file))

  return result
}
