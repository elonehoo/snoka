import { join } from 'path'
import { defineConfig } from '@snoka/config'

export default defineConfig({
  targetDirectory: join(__dirname, 'specs'),
})
