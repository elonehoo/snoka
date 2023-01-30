import { setupConfigLoader, mergeConfig, SnokaConfig, toProgramConfig } from '@snoka/config'
import { runAllTests } from '@snoka/runner'
import pick from 'lodash/pick.js'
import consola from 'consola'

export async function run (quickFilter: string, options) {
  try {
    const configLoader = await setupConfigLoader()
    const config = await configLoader.loadConfig()
    await configLoader.destroy()

    if (typeof options.reporters === 'string') {
      options.reporters = options.reporters.split(',')
    }

    const finalConfig = mergeConfig(config, (pick<any>(options, [
      'match',
      'ignore',
      'reporters',
    ]) as SnokaConfig))

    if (options.coverage) {
      finalConfig.collectCoverage = true
    }

    const { stats: { errorSuiteCount } } = await runAllTests(toProgramConfig(finalConfig), {
      quickTestFilter: quickFilter,
      ...pick<any>(options, [
        'updateSnapshots',
      ]),
    })

    if (errorSuiteCount) {
      process.exit(1)
    } else {
      process.exit(0)
    }
  } catch (e) {
    consola.error(e)
    process.exit(1)
  }
}
