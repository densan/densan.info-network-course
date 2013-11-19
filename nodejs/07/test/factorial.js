// factorial.js

var expect = require("chai").expect;

function factorial(n) {
  if (typeof n !== "number")
    throw new TypeError("n must be a natural number");
  if (n < 0)
    throw new RangeError("n must be a natural number");

  if (n <= 1) return 1;
  return n * arguments.callee(n - 1);
}

describe("factorial", function () {
  it("argument: 0", function () {
    var f = factorial(0);
    expect(f).to.equal(1);
  });

  it("argument: 1", function () {
    var f = factorial(1);
    expect(f).to.equal(1);
  });

  it("argument: 2", function () {
    var f = factorial(2);
    expect(f).to.equal(2);
  });

  it("argument: 10", function () {
    var f = factorial(10);
    expect(f).to.equal(3628800);
  });

  it("argument: -1", function () {
    var f = factorial.bind(null, -1);
    expect(f).to.throw(RangeError, "n must be a natural number");
  });

  it("argument: null", function () {
    var f = factorial.bind(null, null);
    expect(f).to.throw(TypeError, "n must be a natural number");
  });
});
