import { defineConfig } from '@snoka/config'
import { join, resolve } from 'path'

export default defineConfig({
  targetDirectory: join(__dirname, 'specs'),
  watchBaseDirectory: resolve(__dirname, '..'),
})
