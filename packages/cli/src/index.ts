#!/usr/bin/env node
import { Command } from 'commander'
import { setupConfigLoader, mergeConfig, SnokaConfig } from '@snoka/config'
import { runAllTests } from '@snoka/runner'
import { pick } from 'lodash'
import consola from 'consola'

const program = new Command()
program.version(require('../package.json').version)

program.command('run')
  .description('run all tests, useful for continuous integration environments')
  .option('-m, --match <globs...>', 'Globs to match test files. Example: `snoka run -m "**/*.spec.ts" "**/__tests__/*.ts"`')
  .option('-i, --ignore <globs...>', 'Globs ignore when looking for test files. Example: `snoka run -i "node_modules" "dist/**/*.ts"`')
  .action(async (options) => {
    try {
      const configLoader = await setupConfigLoader()
      const config = await configLoader.loadConfig()
      await configLoader.destroy()
      const finalConfig = mergeConfig(config, (pick<any>(options, [
        'match',
        'ignore',
      ]) as SnokaConfig))

      const { stats: { errorTestCount } } = await runAllTests(finalConfig)

      if (errorTestCount) {
        const e = new Error('Some tests failed')
        e.stack = e.message
        throw e
      }
    } catch (e) {
      consola.error(e)
      process.exit(1)
    }
  })

program.parse()
