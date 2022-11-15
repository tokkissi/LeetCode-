/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const wealths = accounts.map((el) =>
    el.reduce((base, plus) => {
      return (base += plus);
    }, 0)
  );
  return Math.max(...wealths);
};
