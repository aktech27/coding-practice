// Leetcode 1920

/*
Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  return nums.map((n, i) => nums[nums[i]]);
};

console.log([0, 2, 1, 5, 3, 4]);
console.log([5, 0, 1, 2, 3, 4]);