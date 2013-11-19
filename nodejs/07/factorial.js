
module.exports = factorial;

function factorial(n) {
  if (typeof n !== "number")
    throw new TypeError("n must be a natural number");
  if (n < 0)
    throw new RangeError("n must be a natural number");

  if (n <= 1) return 1;
  return n * arguments.callee(n - 1);
}
