const plain = "abcdefghijklmnopqrstuvwxyz";
const cipher = "bcdefghijklmnopqrstuvwxyza";

const plainArr = plain.split("");
const cipherArr = cipher.split("");

function caesarCipher(str) {
  const strArr = str.split("");
  let newStr = "";
  strArr.forEach((element) => {
    const index = plainArr.indexOf(element);
    if (index == -1) {
      newStr += element;
    } else {
      newStr += cipherArr[index];
    }
  });
  return newStr;
}

module.exports = caesarCipher;
