// Leetcode 3432
/*
You are given an integer array nums of length n.
A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two non-empty subarrays such that:
 - Left subarray contains indices [0, i].
 - Right subarray contains indices [i + 1, n - 1].
 - Return the number of partitions where the difference between the sum of the left and right subarrays is even.

Example 1:
Input: nums = [10,10,3,7,6]
Output: 4
Explanation:
The 4 partitions are:
[10], [10, 3, 7, 6] with a sum difference of 10 - 26 = -16, which is even.
[10, 10], [3, 7, 6] with a sum difference of 20 - 16 = 4, which is even.
[10, 10, 3], [7, 6] with a sum difference of 23 - 13 = 10, which is even.
[10, 10, 3, 7], [6] with a sum difference of 30 - 6 = 24, which is even.

Example 2:
Input: nums = [1,2,2]
Output: 0
Explanation:
No partition results in an even sum difference.

Example 3:
Input: nums = [2,4,6,8]
Output: 3
Explanation:
All partitions result in an even sum difference.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  const prefixSum = [];
  const suffixSum = [];
  let count = 0;
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    if (i == 0) {
      prefixSum[i] = nums[i];
      suffixSum[j] = nums[j];
    } else {
      prefixSum[i] = prefixSum[i - 1] + nums[i];
      suffixSum[j] = suffixSum[j + 1] + nums[j];
    }
  }

  for (let k = 0; k < prefixSum.length - 1; k++) {
    if (Math.abs(prefixSum[k] - suffixSum[k + 1]) % 2 == 0) {
      count++;
    }

  }

  return count;

};

console.log(countPartitions([10, 10, 3, 7, 6]));
console.log(countPartitions([1, 2, 2]));
console.log(countPartitions([2, 4, 6, 8]));
console.log(countPartitions([1, 1]));
console.log(countPartitions([1, 2]));
console.log(countPartitions([100, 100, 100]));
console.log(countPartitions([1, 3, 5]));
console.log(countPartitions([2, 2]));
console.log(countPartitions([1, 1, 1, 1]));
console.log(countPartitions([1, 2, 3, 4, 5, 6]));
