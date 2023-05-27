// takes a string and returns it with the first character capitalized
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
module.exports = capitalize;
