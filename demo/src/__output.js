'use strict';

//# sourceMappingURL=__output.js.map
+ 42;
}

describe("typescript test suite", () => {
  it("tests the foo function", () => {
    expect(foo(42)).to.equal(84);
  });
  it("meows", () => {
    expect("meow").to.equal("meow");
  });
  it("test a function", () => {
    const spy = sinon.fake();
    spy();
    expect(spy.callCount).to.equal(1);
  });
  it("error", () => {
    expect(1).to.equal(2);
  });
  it("wait for async op", async () => {
    await wait(1e3);
    expect(0).to.equal(0);
  });
  it("wait for async op 2", async () => {
    await wait(1e3);
    expect(0).to.equal(0);
  });
  it("wait for async op 3", async () => {
    await wait(1e3);
    expect(0).to.equal(0);
  });
});
function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
//# sourceMappingURL=__output.js.map
