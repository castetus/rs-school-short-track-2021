/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const arr2 = n.toString().split('');
    arr2.splice(i, 1);
    const newDigit = +arr2.join('');
    newArr.push(newDigit);
  }

  return newArr.sort((a, b) => a - b)[newArr.length - 1];
}

module.exports = deleteDigit;
