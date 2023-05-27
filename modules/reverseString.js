// takes a string and returns it reversed
function reverseString(str) {
  let arr = str.split("");
  let newStr = "";
  arr.forEach((element) => {
    newStr = element + newStr;
  });
  return newStr;
}

module.exports = reverseString;
