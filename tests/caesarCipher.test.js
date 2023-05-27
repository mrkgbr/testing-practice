const caesarCipher = require("../modules/caesarCipher");

test("plaintext:  defend the east wall of the castle => ciphertext: efgfoe uif fbtu xbmm pg uif dbtumf", () => {
  expect(caesarCipher("defend the east wall of the castle")).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});
