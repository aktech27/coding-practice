// Leetcode 15

/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];
  const set = new Set();

  const twoSum = (target, skipIndex) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (i == skipIndex) continue;
      if (map.has(nums[i])) {
        let a = [nums[map.get(nums[i])], nums[i], nums[skipIndex]].sort((a, b) => a - b);
        if (!set.has(`${a}`)) {
          set.add(`${a}`);
          ans.push(a);
        }
      } else {
        map.set(target - nums[i], i);
      }
    }
  };


  let seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!seen.has(nums[i])) {
      twoSum((-1 * nums[i]), i);
      seen.add(nums[i]);
    }
  }
  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 4]));