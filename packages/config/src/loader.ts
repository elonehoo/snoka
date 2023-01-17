import fs from 'fs'
import consola from 'consola'
import { stopESBuildService } from '@snoka/utils'
import { setupConfigContentLoader } from './fs'
import { SnokaConfig } from './types'
import { transformConfigCode } from './transform'
import { defaultSnokaConfig } from './defaults'
import { mergeConfig } from './util'
import { join } from 'path'

export interface PeekyConfigLoaderOptions {
  baseDir?: string
  glob?: string | string[]
}

export async function setupConfigLoader (options: PeekyConfigLoaderOptions = {}) {
  const contentLoader = await setupConfigContentLoader(options.baseDir, options.glob)

  async function loadConfig (): Promise<SnokaConfig> {
    try {
      const file = contentLoader.getConfigPath()
      if (file) {
        const rawCode = await contentLoader.loadConfigFileContent()
        const result = await transformConfigCode(rawCode, file)
        const resolvedPath = join(options.baseDir || process.cwd(), file + '.temp.js')
        fs.writeFileSync(resolvedPath, result.code)
        const { default: config } = (
          // eslint-disable-next-line no-eval
          await eval(`import(resolvedPath + '?t=${Date.now()}')`)
        ).default
        fs.unlinkSync(resolvedPath)
        return mergeConfig(defaultSnokaConfig(), config)
      } else {
        return defaultSnokaConfig()
      }
    } catch (e) {
      consola.error(e)
    } finally {
      stopESBuildService()
    }
  }

  return {
    loadConfig,
  }
}
