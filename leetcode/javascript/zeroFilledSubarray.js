// Leetcode 2348
/*
Given an integer array nums, return the number of subarrays filled with 0.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.

Example 2:
Input: nums = [0,0,0,2,0,0]
Output: 9
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.

Example 3:
Input: nums = [2,10,2019]
Output: 0
Explanation: There is no subarray filled with 0. Therefore, we return 0.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  const countSubarrays = (n) => (n * (n + 1)) / 2;
  let ans = 0, L = 0, R = 0;
  while (L < nums.length && R < nums.length) {
    if (nums[L] == 0) {
      R = L + 1;
      while (R < nums.length) {
        if (nums[R] == 0) {
          R++;
        } else {
          // let subarrayLength = R - L;
          ans += countSubarrays(R - L);
          L = R + 1;
          break;
        }
      }
    } else {
      L++;
    }
  }
  // handle when zeros at end of array
  if (nums[L] == 0 && nums[R - 1] == 0) {
    ans += countSubarrays((R - L));
  }
  return ans;
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0]));
console.log(zeroFilledSubarray([1, 2, 3, 4]));
console.log(zeroFilledSubarray([0]));
console.log(zeroFilledSubarray([5]));
console.log(zeroFilledSubarray([0, 0, 0, 0, 0]));
console.log(zeroFilledSubarray([0, 1, 0, 2, 0]));
console.log(zeroFilledSubarray([0, 0, 0, 0, 5, 6]));
console.log(zeroFilledSubarray([3, 4, 5, 0, 0, 0, 0]));
console.log(zeroFilledSubarray([1000000000, 0, 0, 1000000000]));

