// Leetcode 414

/*
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

Example 1:
Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

Example 2:
Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1 

Follow up: Can you find an O(n) solution?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums = nums.sort((a, b) => (b - a));
  const distinct = [...new Set(nums)];
  if (distinct.length < 3) {
      return distinct[0];
  }
  return distinct[2];
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 2, 2, 5, 3, 5]));
console.log(thirdMax([1, 2, -2147483648]));
console.log(thirdMax([1, 2, -2147483648]));
console.log(thirdMax([1, 2147483647, -2147483648]));
console.log(thirdMax([1, 1, 2]));
