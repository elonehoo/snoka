import type { InlineConfig as ViteConfig } from 'vite'
import type { Arrayable, Awaitable } from '@snoka/utils'

export type ModuleFilter = string | RegExp | ((absolutePath: string) => boolean)
export type ModuleFilterOption<T = ModuleFilter> = T[] | T
export type SerializableModuleFilter = string | RegExp

export type SerializableRuntimeEnv = 'node' | 'dom'
export type BuiltinReporter = 'console-fancy' | 'console-json'

export interface SnokaConfig {
  targetDirectory?: string
  match?: string | string[]
  ignored?: string | string[]
  watchMatch?: string | string[]
  watchBaseDirectory?: string
  watchIgnored?: string | string[]
  watchThrottle?: number
  maxWorkers?: number
  emptySuiteError?: boolean
  collectCoverage?: boolean
  coverageOptions?: C8Options
  runtimeEnv?: SerializableRuntimeEnv | typeof TestEnvironmentBase
  runtimeAvailableEnvs?: Record<string, typeof TestEnvironmentBase>
  mockFs?: boolean
  buildExclude?: ModuleFilterOption
  buildInclude?: ModuleFilterOption
  vite?: ViteConfig
  viteConfigFile?: string
  reporters?: BuiltinReporter[]
  setupFiles?: string[]
  isolate?: boolean
  previewSetupFiles?: string[]
}

export type SerializableSnokaConfig = Omit<SnokaConfig, 'runtimeEnv' | 'runtimeAvailableEnvs' | 'buildExclude' | 'buildInclude' | 'vite'> & {
  runtimeEnv?: SerializableRuntimeEnv
  buildExclude?: ModuleFilterOption<SerializableModuleFilter>
  buildInclude?: ModuleFilterOption<SerializableModuleFilter>
}

export type ProgramSnokaConfig = SerializableSnokaConfig & {
  vite?: SnokaConfig['vite']
}

export interface TestEnvironmentContext {
  testPath: string
  pragma: Record<string, any>
}

export abstract class TestEnvironmentBase {
  constructor(
    public envName: string,
    protected config: SnokaConfig,
    protected context: TestEnvironmentContext,
  ) {}

  abstract create(): Awaitable<void>

  abstract getResult(): Awaitable<any>

  abstract destroy(): Awaitable<void>
}

export interface InstantiableTestEnvironmentClass {
  new(...args: ConstructorParameters<typeof TestEnvironmentBase>): TestEnvironmentBase
}

export type CoverageReporter =
  | 'clover'
  | 'cobertura'
  | 'html-spa'
  | 'html'
  | 'json-summary'
  | 'json'
  | 'lcov'
  | 'lcovonly'
  | 'none'
  | 'teamcity'
  | 'text-lcov'
  | 'text-summary'
  | 'text'

export interface C8Options {
  /**
   * Directory to write coverage report to
   */
  reportsDirectory?: string
  /**
   * Reporters
   *
   * @default 'text'
   */
  reporter?: Arrayable<CoverageReporter>
  /**
   * Exclude coverage under /node_modules/
   *
   * @default true
   */
  excludeNodeModules?: boolean
  exclude?: string[]
  include?: string[]
  skipFull?: boolean
  extension?: string | string[]

  all?: boolean

  // @TODO check thresholds
  // 100?: boolean
  // lines?: number
  // functions?: number
  // branches?: number
  // statements?: number
}

declare module 'vite' {
  interface UserConfig {
    /**
     * Snoka configuration
     */
    test?: SerializableSnokaConfig
  }
}
