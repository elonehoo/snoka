'use strict'

const path = require('path')
const reactive = require('@snoka/reactive')

let fs
describe('reactive fs: list()', () => {
  beforeEach(async () => {
    fs = await reactive.createReactiveFileSystem({
      baseDir: path.join(__dirname, 'list-example'),
      glob: ['**/*.js'],
    })
  })
  test('scan for files', () => {
    expect(fs.list().sort()).to.eql(['sub/waf.js', 'meow.js'].sort())
  })
  test('exclude sub directories', () => {
    expect(fs.list('.', { excludeSubDirectories: true }).sort()).to.eql(['meow.js'].sort())
  })
  test('list sub directory', () => {
    expect(fs.list('sub').sort()).to.eql(['sub/waf.js'].sort())
  })
  test('list is reactive', () => {
    let results = []
    fs.effect(() => {
      results = fs.list('.', { excludeSubDirectories: true }).sort()
    })
    expect(results).to.eql(['meow.js'].sort())
    fs.createFile('foo.js', '')
    expect(results).to.eql(['meow.js', 'foo.js'].sort())
    fs.files['foo.js'].remove()
    expect(results).to.eql(['meow.js'].sort())
  })
})
// # sourceMappingURL=__output.js.map
