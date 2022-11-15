var runningSum = function (nums) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    sum += nums[i];
    arr.push(sum);
  }
  return arr;
};
