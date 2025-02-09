/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new Error('Not implemented');
  let sum = 0;
  const indexes = [];
  matrix.forEach((arr) => {
    arr.forEach((item, i) => {
      if (item === 0) {
        indexes.push(i);
      } else if (item !== 0 && !indexes.includes(i)) {
        sum += item;
      }
    });
  });
  return sum;
}

module.exports = getMatrixElementsSum;
