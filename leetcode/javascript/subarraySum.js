// Leetcode 560

/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  const seen = new Map();
  const prefixSum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefixSum.push(nums[i] + prefixSum[i - 1]);
  }


  for (const n of prefixSum) {
    if (n == k) {
      count++;
    }
    if (seen.has(n - k)) {
      count += seen.get(n - k);
    }
    seen.set(n, (seen.get(n) ?? 0) + 1);
  }

  return count;
};

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([3, 4, 7, -2, 2, 1, 4, 2], 7));
console.log(subarraySum([3, 4, 7, -2, 2, -1, 1, 1, 4, 2], 7));
console.log(subarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3));
console.log(subarraySum([1, -1, 0], 0));