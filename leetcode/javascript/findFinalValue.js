// Leetcode 2154

/*
You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

You then do the following steps:
 - If original is found in nums, multiply it by two (i.e., set original = 2 * original).
 - Otherwise, stop the process.
 - Repeat this process with the new number as long as you keep finding the number.
 - Return the final value of original.

Example 1:
Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation: 
- 3 is found in nums. 3 is multiplied by 2 to obtain 6.
- 6 is found in nums. 6 is multiplied by 2 to obtain 12.
- 12 is found in nums. 12 is multiplied by 2 to obtain 24.
- 24 is not found in nums. Thus, 24 is returned.

Example 2:
Input: nums = [2,7,9], original = 4
Output: 4
Explanation:
- 4 is not found in nums. Thus, 4 is returned.
 
*/

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValueBrute = function (nums, original) {
  nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] == original) {
      original *= 2;
    };

  }
  return original;
};


/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  const hashMap = {};
  for (let index = 0; index < nums.length; index++) {
    hashMap[nums[index]] = true;
  }
  console.log(hashMap);
  while (hashMap[original]) {
    original *= 2;
  }
  return original;
};

console.log(findFinalValue([5, 3, 6, 1, 12], 3));
console.log(findFinalValue([5, 6, 1, 12, 3], 3));
console.log(findFinalValue([2, 7, 9], 4));
console.log(findFinalValue([5, 5, 5, 5], 5));
console.log(findFinalValue([5, 5, 5, 5], 3));
console.log(findFinalValue([1], 1));
console.log(findFinalValue([1], 2));


