// Leetcode 3190
/*
You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.
Return the minimum number of operations to make all elements of nums divisible by 3.

Example 1:
Input: nums = [1,2,3,4]
Output: 3

Explanation:
All array elements can be made divisible by 3 using 3 operations:
Subtract 1 from 1.
Add 1 to 2.
Subtract 1 from 4.

Example 2:
Input: nums = [3,6,9]
Output: 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3) ans += 1;
  }
  return ans;
};

console.log(minimumOperations([1, 2, 3, 4]));
console.log(minimumOperations([3, 6, 9]));
console.log(minimumOperations([0, 0, 0, 2, 0, 0]));
