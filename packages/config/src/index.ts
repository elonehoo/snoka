import { SnokaConfig } from './types'

export * from './types'
export * from './defaults'

/**
 * Type helper to make snoka.config.ts usage easier.
 */
export function defineConfig (config: SnokaConfig): SnokaConfig {
  return config
}
