import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === 'typescript' || label === 'javascript')
      return new TsWorker()
    if (label === 'json')
      return new JsonWorker()
    if (label === 'css')
      return new CssWorker()
    if (label === 'html')
      return new HtmlWorker()
    return new EditorWorker()
  },
}

const lightTheme: monaco.editor.IStandaloneThemeData = {
  base: 'vs',
  inherit: true,
  colors: {
    'diffEditor.insertedTextBackground': '#f9abbd66',
    'diffEditor.removedTextBackground': '#15de9966',
  },
  rules: [],
}

monaco.editor.defineTheme('snoka-light', lightTheme)

const darkTheme: monaco.editor.IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: true,
  colors: {
    'editor.background': '#1e1e25',
    'diffEditor.insertedTextBackground': '#9e1f3b66',
    'diffEditor.removedTextBackground': '#0f613a66',
  },
  rules: [],
}

monaco.editor.defineTheme('snoka-dark', darkTheme)
