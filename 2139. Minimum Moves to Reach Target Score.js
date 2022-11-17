/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let step = 0;
  while (num) {
    step++;
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num--;
    }
  }
  return step;
};
