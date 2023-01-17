import { ReactiveFileSystem } from '@peeky/reactive-fs'
import { PubSubEngine } from 'apollo-server-express'
import { SnokaConfig } from '@snoka/config/dist'

export interface Context {
  config: SnokaConfig
  reactiveFs: ReactiveFileSystem
  pubsub: PubSubEngine
}
