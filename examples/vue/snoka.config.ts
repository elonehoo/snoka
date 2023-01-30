import { defineConfig } from '@snoka/test'

export default defineConfig({
  runtimeEnv: 'node',
  previewSetupFiles:[
    'snoka-preview.ts',
  ]
})
