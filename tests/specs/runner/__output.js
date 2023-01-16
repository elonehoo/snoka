'use strict';

require('rollup-plugin-esbuild');
require('rollup');
var fs = require('fs');
require('memfs');
require('unionfs');
require('fs-monkey');
var path = require('path');
require('@akryum/workerpool');

({ ...fs });
function getCachePath(filePath) {
  const cacheKey = path.relative(process.cwd(), filePath).replace(/(\/|\.)/g, "_");
  return path.join(process.cwd(), "node_modules", ".temp", "peeky-build-cache", cacheKey + ".json");
}

describe("build cache", () => {
  it("generates a cache path", () => {
    sinon.stub(process, "cwd").callsFake(() => "/home/acme/project");
    expect(getCachePath("/home/acme/project/src/test.spec.js")).to.equal("/home/acme/project/node_modules/.temp/peeky-build-cache/src_test_spec_js.json");
  });
});
//# sourceMappingURL=__output.js.map
