import { createRetry } from './test-flow.js'
import { createMockModule } from './mock.js'

export interface SnokaGlobalContext {
  filename: string
}

export function createSnokaGlobal(ctx: SnokaGlobalContext) {
  return {
    retry: createRetry(ctx),
    mockModule: createMockModule(ctx),
  }
}

export type SnokaGlobals = ReturnType<typeof createSnokaGlobal>
