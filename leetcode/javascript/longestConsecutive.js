// Leetcode 128

/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Example 3:
Input: nums = [1,0,1,2]
Output: 3
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  const set = new Set();
  let ans = 1;
  for (const num of nums) {
    set.add(num);
  }

  for (const s of set) {
    if (!set.has(s - 1)) {
      let consecutive = 1;
      while (set.has(s + consecutive)) {
        consecutive++;
      }
      ans = Math.max(ans, consecutive);
    }
  }

  return ans;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([1, 0, 1, 2]));
console.log(longestConsecutive([1, 3, 5, 7]));
console.log(longestConsecutive([57, 58, 59, 100, 4, 200, 1, 3, 2, 54, 55, 56]));
console.log(longestConsecutive([0, 3, 7, -2, 5, -8, 4, 6, 0, 1]));