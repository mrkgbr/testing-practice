const reverseString = require("../modules/reverseString");

test("apple to elppa", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test("Apple to elppA", () => {
  expect(reverseString("Apple")).toBe("elppA");
});

test("aPPle to elPPa", () => {
  expect(reverseString("aPPle")).toBe("elPPa");
});
