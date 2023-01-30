import type { SnokaConfig } from './types.js'

export * from './types.js'
export * from './defaults.js'
export * from './loader.js'
export * from './util.js'

/**
 * Type helper to make peeky.config.ts usage easier.
 */
export function defineConfig (config: SnokaConfig): SnokaConfig {
  return config
}
