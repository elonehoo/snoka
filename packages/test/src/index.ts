import {
  AfterAllFn,
  AfterEachFn,
  BeforeAllFn,
  BeforeEachFn,
  DescribeFn,
  SnokaGlobals,
  TestFn,
} from '@snoka/runner'

export * from '@snoka/config'
export * from '@snoka/runner'

// Register hooks
export declare const describe: DescribeFn
export declare const test: TestFn
export declare const it: TestFn
export declare const beforeAll: BeforeAllFn
export declare const afterAll: AfterAllFn
export declare const beforeEach: BeforeEachFn
export declare const afterEach: AfterEachFn
export declare const retry: SnokaGlobals['retry']
export declare const mockModule: SnokaGlobals['mockModule']

declare global {
  const describe: DescribeFn
  const it: TestFn
  const test: TestFn
  const beforeAll: BeforeAllFn
  const afterAll: AfterAllFn
  const beforeEach: BeforeEachFn
  const afterEach: AfterEachFn
  const expect: typeof import('expect').expect
  const sinon: typeof import('sinon')
  const snoka: SnokaGlobals
}
