#!/usr/bin/env node
import { Command } from 'commander'
import { runAllTests } from '@snoka/runner'
import lodash from 'lodash'
import consola from 'consola'

const { pick } = lodash

const program = new Command()
/* eslint-disable @typescript-eslint/no-var-requires */
program.version(require('../package.json').version)

program.command('run')
  .description('run all tests, useful for continuous integration environments')
  .option('-m, --match <globs...>', 'Globs to match test files. Example: `snoka run -m "**/*.spec.ts" "**/__tests__/*.ts"`')
  .option('-i, --ignore <globs...>', 'Globs ignore when looking for test files. Example: `snoka run -i "node_modules" "dist/**/*.ts"`')
  .action(async (options) => {
    try {
      const { stats: { errorTestCount } } = await runAllTests({
        targetDirectory: process.cwd(),
        ...pick(options, [
          'match',
          'ignore',
        ]),
      })
      if (errorTestCount) {
        const e = new Error('Some tests failed')
        e.stack = e.message
        throw e
      }
    }
    catch (e) {
      consola.error(e)
      process.exit(1)
    }
  })

program.parse()
