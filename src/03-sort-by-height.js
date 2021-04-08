/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const resultArr = [];
  let additionalArr = [];
  let i = 0;

  arr.forEach((element) => {
    if (element !== -1) {
      additionalArr.push(element);
    }
  });

  additionalArr = additionalArr.sort((a, b) => a - b);

  arr.forEach((element) => {
    if (element === -1) {
      resultArr.push(element);
    } else {
      resultArr.push(additionalArr[i]);
      i++;
    }
  });

  return resultArr;
}

module.exports = sortByHeight;
