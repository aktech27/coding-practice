// Leetcode 1512

/*
Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const computeGoodPairs = (n) => (n * (n - 1)) / 2;
  const hashObj = {};
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    if (hashObj[nums[i]]) {
      hashObj[nums[i]] += 1;
    } else {
      hashObj[nums[i]] = 1;
    }
  }

  for (const num in hashObj) {
    pairs += computeGoodPairs(hashObj[num]);
  }

  return pairs;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
console.log(numIdenticalPairs([2, 2]));
