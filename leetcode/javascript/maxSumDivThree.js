// Leetcode 1262
/*
Given an integer array nums, return the maximum possible sum of elements of the array such that it is divisible by three.

Example 1:
Input: nums = [3,6,5,1,8]
Output: 18
Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).

Example 2:
Input: nums = [4]
Output: 0
Explanation: Since 4 is not divisible by 3, do not pick any number.

Example 3:
Input: nums = [1,2,3,4,4]
Output: 12
Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  // Maintain maxheap of 2 elements
  const twoSmallestElements = (arr, x) => {
    if (arr.length < 2) {
      arr.push(x);
      if (arr.length == 2 && arr[0] > arr[1]) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
      }
    } else {
      if (x < arr[0]) {
        [arr[0], arr[1]] = [x, arr[0]];
      } else if (x < arr[1]) {
        arr[1] = x;
      }
    }
    return arr;
  };
  let maxSum = 0;
  let removeOne = [];
  let removeTwo = [];
  for (let i = 0; i < nums.length; i++) {
    maxSum += nums[i];
    if (nums[i] % 3 == 1) {
      removeOne = twoSmallestElements(removeOne, nums[i]);
    } else if (nums[i] % 3 == 2) {
      removeTwo = twoSmallestElements(removeTwo, nums[i]);
    }
  }
  let sumOne = removeOne[0] + removeOne[1];
  let sumTwo = removeTwo[0] + removeTwo[1];
  if (maxSum % 3 == 1) {
    if (removeOne.length == 0 || removeOne[0] > sumTwo) {
      maxSum = maxSum - sumTwo;
    } else {
      maxSum -= removeOne[0];
    }
  } else if (maxSum % 3 == 2) {
    if (removeTwo.length == 0 || removeTwo[0] > sumOne) {
      maxSum = maxSum - sumOne;
    } else {
      maxSum -= removeTwo[0];
    }
  }
  return maxSum;
};

console.log(maxSumDivThree([3, 6, 5, 1, 8]));
console.log(maxSumDivThree([4]));
console.log(maxSumDivThree([1, 2, 3, 4, 4]));
console.log(maxSumDivThree([1, 1, 1, 1, 1]));
console.log(maxSumDivThree([2, 2, 2, 2, 2]));
console.log(maxSumDivThree([4, 4, 4, 4, 4, 4]));
console.log(maxSumDivThree([17, 2]));
console.log(maxSumDivThree([9, 9, 8, 8, 8, 8, 8]));
console.log(maxSumDivThree([4, 4, 4, 2, 2, 2, 1]));
console.log(maxSumDivThree([2, 6, 2, 2, 7]));