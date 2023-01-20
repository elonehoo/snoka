'use strict';

var stats = require('@snoka/runner/src/stats');

describe("getStats()", () => {
  test("no errors", () => {
    const stats$1 = stats.getStats([
      {
        duration: 0,
        filePath: "",
        suites: [
          {
            id: "",
            filePath: "",
            title: "",
            errors: 0,
            tests: [
              {
                id: "",
                title: "",
                error: null
              }
            ]
          },
          {
            id: "",
            filePath: "",
            title: "",
            errors: 0,
            tests: [
              {
                id: "",
                title: "",
                error: null
              },
              {
                id: "",
                title: "",
                error: null
              }
            ]
          }
        ]
      },
      {
        duration: 0,
        filePath: "",
        suites: [
          {
            id: "",
            filePath: "",
            title: "",
            errors: 0,
            tests: [
              {
                id: "",
                title: "",
                error: null
              }
            ]
          },
          {
            id: "",
            filePath: "",
            title: "",
            errors: 0,
            tests: [
              {
                id: "",
                title: "",
                error: null
              },
              {
                id: "",
                title: "",
                error: null
              }
            ]
          }
        ]
      }
    ]);
    expect(stats$1.suiteCount).to.eql(4);
    expect(stats$1.errorSuiteCount).to.eql(0);
    expect(stats$1.testCount).to.eql(6);
    expect(stats$1.errorTestCount).to.eql(0);
  });
  test("counts errors", () => {
    const stats$1 = stats.getStats([
      {
        duration: 0,
        filePath: "",
        suites: [
          {
            id: "",
            filePath: "",
            title: "",
            errors: 0,
            tests: [
              {
                id: "",
                title: "",
                error: null
              }
            ]
          },
          {
            id: "",
            filePath: "",
            title: "",
            errors: 1,
            tests: [
              {
                id: "",
                title: "",
                error: new Error()
              },
              {
                id: "",
                title: "",
                error: null
              }
            ]
          }
        ]
      }
    ]);
    expect(stats$1.suiteCount).to.eql(2);
    expect(stats$1.errorSuiteCount).to.eql(1);
    expect(stats$1.testCount).to.eql(3);
    expect(stats$1.errorTestCount).to.eql(1);
  });
});
//# sourceMappingURL=__output.js.map
