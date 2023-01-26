import type { PubSubEngine } from 'apollo-server-express'
import type { SnokaConfig } from '@snoka/config/dist'
import type { ViteDevServer } from 'vite'

export interface Context {
  config: SnokaConfig
  pubsub: PubSubEngine
  vitePort: number
  viteServer: ViteDevServer
}
