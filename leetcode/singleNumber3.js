// Leetcode 260

/*
Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
    } else {
      res.push(nums[i]);
    }
  }
  return res;
};

console.log(singleNumber([1, 2, 3, 5, 3, 5, 1, 7]));
console.log(singleNumber([1, 2, 1, 3, 2, 5]));
console.log(singleNumber([-1, 0]));
console.log(singleNumber([0, 1]));