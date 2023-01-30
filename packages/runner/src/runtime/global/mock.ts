import { dirname, resolve } from 'pathe'
import { mockedModules } from '../mocked-files.js'
import type { SnokaGlobalContext } from './index.js'

export function createMockModule(ctx: SnokaGlobalContext) {
  return (path: string, stub: any) => {
    mockedModules.set(resolve(dirname(ctx.filename), path), stub)
  }
}
