// Leetcode 2903

/*
You are given a 0-indexed integer array nums having length n, an integer indexDifference, and an integer valueDifference.

Your task is to find two indices i and j, both in the range [0, n - 1], that satisfy the following conditions:

abs(i - j) >= indexDifference, and
abs(nums[i] - nums[j]) >= valueDifference
Return an integer array answer, where answer = [i, j] if there are two such indices, and answer = [-1, -1] otherwise. If there are multiple choices for the two indices, return any of them.

Note: i and j may be equal.
*/

/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if ((Math.abs(i - j) >= indexDifference) && (Math.abs(nums[i] - nums[j]) >= valueDifference)) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

console.log(findIndices([5, 1, 4, 1], 2, 4));
console.log(findIndices([2, 1], 0, 0));
console.log(findIndices([1, 2, 3], 2, 4));