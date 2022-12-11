/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let splited = strs.map((el) => el.split(""));
  let first = splited[0];
  let ans = "";
  for (let i = 0; i < first.length; i++) {
    let temp = first[i];
    let check = true;
    if (temp === undefined) {
      break;
    }
    splited.map((el) => {
      if (el[i] === undefined || el[i] !== temp) {
        check = false;
        return;
      }
    });
    if (!check) {
      break;
    }
    ans += temp;
  }
  return ans;
};
