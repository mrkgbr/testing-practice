const capitalize = require("../modules/capitalize");

test("apple to Apple", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("APPLE to Apple", () => {
  expect(capitalize("APPLE")).toBe("Apple");
});

test("aPPLE to Apple", () => {
  expect(capitalize("aPPLE")).toBe("Apple");
});
