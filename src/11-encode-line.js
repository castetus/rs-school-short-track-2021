/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  const arr = str.split('');
  const resultArr = [];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else if (arr[i] !== arr[i + 1] && count === 1) {
      resultArr.push(arr[i]);
    } else if (arr[i] !== arr[i + 1] && count !== 1) {
      resultArr.push(count + arr[i]);
      count = 1;
    }
  }
  return resultArr.join('');
}

module.exports = encodeLine;
