import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'pathe'

const monacoPrefix = 'monaco-editor/esm/vs'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      tslib: 'tslib/tslib.es6.js',
    },
  },
  build: {
    outDir: resolve(__dirname, '../client-dist/dist'),

    rollupOptions: {
      output: {
        manualChunks: {
          jsonWorker: [`${monacoPrefix}/language/json/json.worker`],
          cssWorker: [`${monacoPrefix}/language/css/css.worker`],
          htmlWorker: [`${monacoPrefix}/language/html/html.worker`],
          tsWorker: [`${monacoPrefix}/language/typescript/ts.worker`],
          editorWorker: [`${monacoPrefix}/editor/editor.worker`],
        },
      },
    },
  },
  define: {
    __DEV__: 'false',
  },
  optimizeDeps: {
    include: [
      'xterm',
      'xterm-addon-fit',
      'xterm-addon-search',
      'xterm-addon-web-links',
      'xterm-addon-webgl',
      'vue-resize',
    ],
    exclude: ['@snoka/utils', '@snoka/server/types'],
  },
})
