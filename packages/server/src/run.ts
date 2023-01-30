import type { Context } from './context'
import type { CreateRunOptions } from './schema/index.js'
import { createRun, startRun } from './schema/index.js'

export async function run(ctx: Context, options: CreateRunOptions) {
  const run = await createRun(ctx, options)
  await startRun(ctx, run.id)
}
