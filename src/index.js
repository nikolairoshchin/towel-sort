
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (!matrix) return result;

  for (i = 0; i < matrix.length; i++) {
    if (i % 2) {
      result.push(matrix[i].reverse());
    } else {
      result.push(matrix[i]);
    };
  };
  return result.flat();
}
