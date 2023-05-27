function analyzeArray(array) {
  let average;
  let min;
  let max;
  let length;

  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  length = array.length;
  average = sum / length;
  min = Math.min(...array);
  max = Math.max(...array);

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

module.exports = analyzeArray;
