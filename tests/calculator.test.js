const calculator = require("../modules/calculator");

test("2 plus 3 equal to 5", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("-2 plus 3 equal to 1", () => {
  expect(calculator.add(-2, 3)).toBe(1);
});

test("2 minus 3 equal to -1", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("-2 minus 3 equal to -5", () => {
  expect(calculator.subtract(-2, 3)).toBe(-5);
});

test("6 divided by 3 equal to 2", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test("6 divided by 0, get message: cannot divide by 0", () => {
  expect(calculator.divide(6, 0)).toBe("cannot divide by 0");
});

test("6 multiplied by 3 equal to 18", () => {
  expect(calculator.multiply(6, 3)).toBe(18);
});

test("6 multiplied by 0 equal to 0", () => {
  expect(calculator.multiply(6, 0)).toBe(0);
});

test("-2 multiplied by -1 equal to 2", () => {
  expect(calculator.multiply(-2, -1)).toBe(2);
});
