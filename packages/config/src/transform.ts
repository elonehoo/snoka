import { transformWithEsbuild } from '@snoka/utils'

export async function transformConfigCode (code: string, fileName: string) {
  return transformWithEsbuild(code, fileName)
}
