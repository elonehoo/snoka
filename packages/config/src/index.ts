import type { SnokaConfig } from './types'

export * from './types'
export * from './defaults'
export * from './loader'

/**
 * Type helper to make snoka.config.ts usage easier.
 */
export function defineConfig(config: SnokaConfig): SnokaConfig {
  return config
}
