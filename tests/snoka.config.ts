import { defineConfig } from '@snoka/config'
import { join } from 'path'

export default defineConfig({
  targetDirectory: join(__dirname, 'specs'),
})
