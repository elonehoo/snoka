import { defineConfig } from '@snoka/test'

export default defineConfig({
  // match: ['**/bar.spec.ts'],
  // external: [],
  // runtimeEnv: MyEnv,
  // mockFs: false,
  // reporters: ['console-json'],
  runtimeEnv: 'dom',
  // collectCoverage: true,
  watchThrottle: 1000,
})
