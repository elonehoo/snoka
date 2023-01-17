import type { Context } from '../types'
import { retry } from './test-flow'

export function createSnokaGlobal(ctx: Context) {
  return {
    retry,
  }
}

export type SnokaGlobal = ReturnType<typeof createSnokaGlobal>
