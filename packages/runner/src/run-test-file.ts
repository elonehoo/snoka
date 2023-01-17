import { dirname, join } from 'path'
import { install as installSourceMap } from 'source-map-support'
import consola from 'consola'
import { workerEmit } from '@akryum/workerpool'
import type { Context, RunTestFileOptions, TestSuiteResult } from './types'
import { EventType } from './types'
import { buildTestFile } from './build'
import { registerGlobals } from './globals'
import { runTests } from './run-tests'

export async function runTestFile(options: RunTestFileOptions) {
  try {
    const ctx: Context = {
      options,
      suites: [],
    }
    const time = Date.now()
    await buildTestFile(ctx)
    registerGlobals(ctx, global)
    installSourceMap()
    require(join(dirname(ctx.options.entry), '/__output.js'))
    await runTests(ctx)
    const duration = Date.now() - time
    workerEmit(EventType.TEST_FILE_COMPLETED, {
      filePath: ctx.options.entry,
      duration,
    })

    const suites: TestSuiteResult[] = ctx.suites.map(s => ({
      id: s.id,
      title: s.title,
      filePath: s.filePath,
      errors: s.errors,
      tests: s.tests.map(t => ({
        id: t.id,
        title: t.title,
        error: t.error,
      })),
    }))
    return {
      filePath: options.entry,
      suites,
      duration,
    }
  }
  catch (e) {
    consola.error(`Running tests failed: ${e.stack}`)
    throw e
  }
}
