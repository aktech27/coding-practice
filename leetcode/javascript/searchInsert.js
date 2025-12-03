// Leetcode 35
/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let L = 0, R = nums.length - 1;
  while (L <= R) {
    let M = Math.floor((L + R) / 2);
    if (nums[M] == target) {
      return M;
    } else if (target < nums[M]) {
      R = M - 1;
    } else {
      L = M + 1;
    }
  }
  return L;
};

// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([1, 3, 5, 6], 0));
// console.log(searchInsert([1], 0));
// console.log(searchInsert([1], 2));
// console.log(searchInsert([1, 3], 3));
// console.log(searchInsert([1, 3], 2));
// console.log(searchInsert([1, 1, 1, 1], 1));
console.log(searchInsert([1, 2, 4, 6, 8, 10], 7));
// console.log(searchInsert([1, 3, 5, 6, 7, 8, 9], 9));

