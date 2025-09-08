// Leetcode 945

/*
You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.
Return the minimum number of moves to make every value in nums unique.
The test cases are generated so that the answer fits in a 32-bit integer.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  let count = 0;
  nums.sort((a, b) => (a - b));
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      count += (nums[i - 1] + 1) - nums[i];
      nums[i] += (nums[i - 1] + 1) - nums[i];
    }
  }
  return count;
};

console.log(minIncrementForUnique([1, 2, 2]));
console.log(minIncrementForUnique([1, 2, 3, 4, 3, 7]));
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));
