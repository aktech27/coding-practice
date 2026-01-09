// Leetcode 659

/*
You are given an integer array nums that is sorted in non-decreasing order.
Determine if it is possible to split nums into one or more subsequences such that both of the following conditions are true:
Each subsequence is a consecutive increasing sequence (i.e. each integer is exactly one more than the previous integer).
All subsequences have a length of 3 or more.
Return true if you can split nums according to the above conditions, or false otherwise.
A subsequence of an array is a new array that is formed from the original array by deleting some (can be none) of the elements without disturbing the relative positions of the remaining elements. (i.e., [1,3,5] is a subsequence of [1,2,3,4,5] while [1,3,2] is not).

Example 1:
Input: nums = [1,2,3,3,4,5]
Output: true
Explanation: nums can be split into the following subsequences:
[1,2,3,3,4,5] --> 1, 2, 3
[1,2,3,3,4,5] --> 3, 4, 5

Example 2:
Input: nums = [1,2,3,3,4,4,5,5]
Output: true
Explanation: nums can be split into the following subsequences:
[1,2,3,3,4,4,5,5] --> 1, 2, 3, 4, 5
[1,2,3,3,4,4,5,5] --> 3, 4, 5

Example 3:
Input: nums = [1,2,3,4,4,5]
Output: false
Explanation: It is impossible to split nums into consecutive increasing subsequences of length 3 or more.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  const frequency = new Map();
  const subsequence = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (frequency.has(nums[i])) {
      frequency.set(nums[i], frequency.get(nums[i]) + 1);
    } else {
      frequency.set(nums[i], 1);
    }
  }

  for (let n of nums) {
    if (frequency.get(n) == 0) continue;
    if (subsequence.has(n) && subsequence.get(n) != 0) {
      subsequence.set(n, subsequence.get(n) - 1);
      subsequence.set(n + 1, (subsequence.get(n + 1) ?? 0) + 1);
      frequency.set(n, frequency.get(n) - 1);
    } else if (frequency.get(n) > 0 && frequency.get(n + 1) > 0 && frequency.has(n + 2) > 0) {
      frequency.set(n, frequency.get(n) - 1);
      frequency.set(n + 1, frequency.get(n + 1) - 1);
      frequency.set(n + 2, frequency.get(n + 2) - 1);
      subsequence.set(n + 3, (subsequence.get(n + 3) ?? 0) + 1);
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPossible([1, 2, 3, 3, 4, 5]));
console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5]));
console.log(isPossible([1, 2, 3, 4, 4, 5]));
console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6]));
console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 7, 8]));