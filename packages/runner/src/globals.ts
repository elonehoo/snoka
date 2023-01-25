import sinon from 'sinon'
import must from 'must'
import { Context } from './types'
import { createSnokaGlobal } from './global'
import { Register } from './test-register'

export function registerGlobals (ctx: Context, target: any, register: Register) {
  // Global objects
  target.peeky = createSnokaGlobal(ctx)
  target.expect = must
  target.sinon = sinon

  // Register
  target.describe = register.exposed.describe
  target.it = target.test = register.exposed.test
  target.beforeAll = register.exposed.beforeAll
  target.afterAll = register.exposed.afterAll
  target.beforeEach = register.exposed.beforeEach
  target.afterEach = register.exposed.afterEach
}
