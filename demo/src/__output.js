'use strict';

function foo(count) {
  return count + 42;
}

describe("yet another ts test suite", () => {
  it("tests the foo function again", () => {
    expect(foo(42)).to.equal(84);
  });
  it("another meows", () => {
    expect("meow").to.equal("meow");
  });
  it("this is a function spy", () => {
    const spy = sinon.fake();
    spy();
    expect(spy.callCount).to.equal(1);
  });
});
//# sourceMappingURL=__output.js.map
