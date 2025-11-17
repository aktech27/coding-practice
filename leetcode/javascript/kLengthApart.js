// Leetcode 1437

/*
Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

Example 1:
Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.

Example 2:
Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.
 
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let prevIndex = -1;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] == 1) {
      if (prevIndex == -1) {
        prevIndex = index;
        continue;
      }
      let distance = (index - prevIndex) - 1;
      prevIndex = index;
      if (distance < k) {
        return false;
      }
    }
  }
  return true;
};
console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
console.log(kLengthApart([1, 0, 1], 2));
console.log(kLengthApart([0, 1, 0, 0, 1, 0, 0, 1], 2));
console.log(kLengthApart([0], 1));
console.log(kLengthApart([1], 0));
console.log(kLengthApart([0], 0));
console.log(kLengthApart([1], 1));  