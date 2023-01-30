import type { SnokaConfig } from '@snoka/config'
import { setupConfigLoader } from '@snoka/config'
import { setupConsole } from './console.js'

let initialized = false
export let baseConfig: SnokaConfig

export async function setupWorker() {
  if (initialized)
    return

  // Base config
  const configLoader = await setupConfigLoader()
  const config = await configLoader.loadConfig(false)
  await configLoader.destroy()
  baseConfig = config

  setupConsole()

  initialized = true
}
