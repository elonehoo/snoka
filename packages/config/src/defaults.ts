import { SnokaConfig } from './types'

export const snokaConfigFileMatch = ['**/snoka.config.(js|ts)']

export const defaultSnokaConfig: () => SnokaConfig = () => ({
  targetDirectory: process.cwd(),
  match: ['**/*.(spec|test).(ts|js)', '**/__tests__/**/*.(ts|js)'],
  ignored: ['node_modules'],
})
