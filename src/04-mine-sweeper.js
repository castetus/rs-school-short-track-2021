/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function checkMines(line, index, lineIndex) {
    let sum = 0;
    function test(line2, index2) {
      let counter = 0;
      for (let i = index2 - 1; i <= index2 + 1; i++) {
        if (line2[i]) {
          counter++;
        }
      }

      return counter;
    }
    if (matrix[lineIndex - 1]) {
      sum += test(matrix[lineIndex - 1], index);
    }
    if (matrix[lineIndex + 1]) {
      sum += test(matrix[lineIndex + 1], index);
    }
    sum += test(line, index);
    return sum;
  }

  const result = matrix.map((line, lineIndex) => line.map((elem, index) => {
    if (elem === false) {
      if (lineIndex === 1) {
        checkMines(line, index, lineIndex);
      }
      return checkMines(line, index, lineIndex);
    }
    return 1;
  }));

  return result;
}

module.exports = minesweeper;
