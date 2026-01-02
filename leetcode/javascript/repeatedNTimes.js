// Leetcode 961

/*
You are given an integer array nums with the following properties:
 - nums.length == 2 * n.
 - nums contains n + 1 unique elements.
 - Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

Example 1:
Input: nums = [1,2,3,3]
Output: 3

Example 2:
Input: nums = [2,1,2,5,3,2]
Output: 2

Example 3:
Input: nums = [5,1,5,2,5,3,5,4]
Output: 5
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    } else {
      set.add(nums[i]);
    }
  }
};

console.log(repeatedNTimes([1, 2, 3, 3]));
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));