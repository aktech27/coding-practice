// Leetcode 1018
/*
You are given a binary array nums (0-indexed).
We define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).
For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.
Return an array of booleans answer where answer[i] is true if xi is divisible by 5.

Example 1:
Input: nums = [0,1,1]
Output: [true,false,false]
Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
Only the first number is divisible by 5, so answer[0] is true.

Example 2:
Input: nums = [1,1,1]
Output: [false,false,false]
*/

/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  // Formula if X is the decimal of ith element, then 2X + A[i+1] is the decimal of i+1
  let ans = [nums[0] % 5 == 0];
  for (let i = 1; i < nums.length; i++) {
    // console.log(`(2 * ${nums[i - 1]}) + ${nums[i]}`);
    // But sometimes number too large, incorrect modulo answers, so take only the last two digits
    let x = ((2 * nums[i - 1]) + nums[i]) % 100;
    (x % 5 == 0) ? ans.push(true) : ans.push(false);
    nums[i] = x;
  }
  console.log(nums);
  return ans;
};


console.log(prefixesDivBy5([0, 1, 1]));
console.log(prefixesDivBy5([1, 1, 1]));
console.log(prefixesDivBy5([1, 0, 1, 0, 1, 0, 1, 0, 1, 0]));
console.log(prefixesDivBy5([0, 0, 0, 0, 0, 0, 0, 0]));
console.log(prefixesDivBy5([1, 1, 1, 1, 1, 1, 1, 1]));
console.log(prefixesDivBy5([1, 0, 0, 0, 0, 0, 0, 0, 0, 1]));
console.log(prefixesDivBy5([1, 1, 0, 0, 1, 1, 0, 0, 1, 1]));
console.log(prefixesDivBy5([0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0]));
console.log(prefixesDivBy5([1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1]));
console.log(prefixesDivBy5([1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1]));
