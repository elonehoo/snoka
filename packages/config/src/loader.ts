import fs from 'fs'
import { join } from 'path'
import consola from 'consola'
import { stopESBuildService } from '@snoka/utils'
import { setupConfigContentLoader } from './fs'
import type { SnokaConfig } from './types'
import { transformConfigCode } from './transform'
import { defaultSnokaConfig } from './defaults'
import { mergeConfig } from './util'

export interface SnokaConfigLoaderOptions {
  baseDir?: string
  glob?: string | string[]
}

export async function setupConfigLoader (options: SnokaConfigLoaderOptions = {}) {
  const contentLoader = await setupConfigContentLoader(options.baseDir, options.glob)

  async function loadConfig (stopEsBuild = true): Promise<SnokaConfig> {
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
      if (stopEsBuild) {
        stopESBuildService()
      }
    }
  }

  function destroy () {
    return contentLoader.destroy()
  }

  return {
    loadConfig,
    destroy,
  }
}
