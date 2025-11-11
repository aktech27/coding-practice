// Leetcode 189

/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

// Brute Force:
var rotateBrute = function (nums, k) {
  if (nums.length == k || nums.length <= 1 || k == 0) {
    return nums;
  }
  if (k > nums.length) {
    k = k % nums.length;
  }
  let ans = [];
  let i = 0;
  let ptr = nums.length - k;
  while (i < nums.length) {
    ans[i] = nums[ptr];
    ptr = (ptr + 1) % nums.length;
    i++;
  }
  nums = ans;
  return nums;
};

// Optimal Solution - Sort in descending order, Then divide the array into two based on k, and sort then again descending
// Example 1 : [1,2,3,4,5,6,7] and k=3 then [7,6,5 | 4,3,2,1] --> [5,6,7,1,2,3,4] 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const reverse = (L, R) => {
    while (L < R) {
      [nums[L], nums[R]] = [nums[R], nums[L]];
      L++;
      R--;
    }
  };

  // Edge cases
  k = k % nums.length;
  if (nums.length <= 1 || k == 0) {
    return nums;
  }

  // Reverse the entire array
  let L = 0, R = nums.length - 1;
  reverse(L, R);

  // Reverse the block till k
  L = 0;
  R = k - 1;
  reverse(L, R);

  // Reverse the remaining block
  L = k;
  R = nums.length - 1;
  reverse(L, R);
  return nums;
};


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
console.log(rotate([1], 3));
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 7));
console.log(rotate([1, 2, 3, 4, 5], 7));
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 6));