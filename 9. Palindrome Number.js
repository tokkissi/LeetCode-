/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let token = String(x).split("");
  let rev = [...token].reverse();
  let ans = true;
  for (let i = 0; i < token.length; i++) {
    if (token[i] !== rev[i]) {
      ans = false;
      break;
    }
  }
  return ans;
};
