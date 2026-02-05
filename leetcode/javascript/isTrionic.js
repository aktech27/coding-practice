// Leetcode 3637

/*
You are given an integer array nums of length n.
An array is trionic if there exist indices 0 < p < q < n − 1 such that:
 - nums[0...p] is strictly increasing,
 - nums[p...q] is strictly decreasing,
 - nums[q...n − 1] is strictly increasing.
Return true if nums is trionic, otherwise return false.

Example 1:
Input: nums = [1,3,5,4,2,6]
Output: true
Explanation:
Pick p = 2, q = 4:
nums[0...2] = [1, 3, 5] is strictly increasing (1 < 3 < 5).
nums[2...4] = [5, 4, 2] is strictly decreasing (5 > 4 > 2).
nums[4...5] = [2, 6] is strictly increasing (2 < 6).

Example 2:
Input: nums = [2,1,3]
Output: false
Explanation:
There is no way to pick p and q to form the required three segments.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function (nums) {
  let p = false, q = false, r = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) return false;
    if (!p) {
      if (nums[i] > nums[i - 1]) {
        p = true;
      }
    } else if (!q) {
      if (nums[i] < nums[i - 1] && i < nums.length - 1) {
        q = true;
      }
    } else if (!r) {
      if (nums[i] > nums[i - 1]) {
        r = true;
      }
    }
  }
  return p && q && r;
};


console.log(isTrionic([1, 3, 5, 4, 2, 6]));
console.log(isTrionic([2, 1, 3]));
console.log(isTrionic([2, 4, 3, 3]));
console.log(isTrionic([1, 6, 6, 3, 7]));
console.log(isTrionic([6, 7, 5, 1]));
console.log(isTrionic([1, 2, 3]));
console.log(isTrionic([1, 2, 1]));