// Leetcode 169

/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let hashMap = {};
  let majorityElement = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      hashMap[nums[i]] += 1;
      if (hashMap[nums[i]] > Math.ceil(nums.length / 2)) {
        return nums[i];
      }
      if (hashMap[nums[i]] > hashMap[majorityElement]) {
        majorityElement = nums[i]
      }
    } else {
      hashMap[nums[i]] = 1;
    }
  }
  return majorityElement;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3]));
