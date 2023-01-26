#!/usr/bin/env node
import { Command } from 'commander'
import { setupConfigLoader, mergeConfig, SnokaConfig } from '@snoka/config'
import { runAllTests } from '@snoka/runner'
import { createServer } from '@snoka/server'
import { pick } from 'lodash'
import consola from 'consola'
import { ensureESBuildService } from '@snoka/utils'
import portfinder from 'portfinder'

const program = new Command()
program.version(require('../package.json').version)

program.command('run')
  .description('run all tests, useful for continuous integration environments')
  .option('-m, --match <globs...>', 'Globs to match test files. Example: `snoka run -m "**/*.spec.ts" "**/__tests__/*.ts"`')
  .option('-i, --ignore <globs...>', 'Globs ignore when looking for test files. Example: `snoka run -i "node_modules" "dist/**/*.ts"`')
  .action(async (options) => {
    try {
      await ensureESBuildService()
      const configLoader = await setupConfigLoader()
      const config = await configLoader.loadConfig(false)
      await configLoader.destroy()
      const finalConfig = mergeConfig(config, (pick<any>(options, [
        'match',
        'ignore',
      ]) as SnokaConfig))

      const { stats: { errorSuiteCount } } = await runAllTests(finalConfig)

      if (errorSuiteCount) {
        const e = new Error('Some tests failed')
        e.stack = e.message
        throw e
      }
    } catch (e) {
      consola.error(e)
      process.exit(1)
    }
  })

program.command('open')
  .description('open a web interface to run and monitor tests')
  .option('-p, --port <port>', 'Listening port of the server')
  .action(async (options) => {
    try {
      await ensureESBuildService()
      const {
        http,
      } = await createServer()
      const port = options.port ?? process.env.PORT ?? await portfinder.getPortPromise({
        startPort: 5000,
      })
      http.listen(port, () => {
        const url = `http://localhost:${port}`
        consola.success(`🚀 Server ready at ${url}`)
        open(url)
      })
    } catch (e) {
      consola.error(e)
      process.exit(1)
    }
  })

program.parse()
