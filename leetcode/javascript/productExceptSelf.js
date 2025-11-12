// Leetcode 238

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation. 

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 */

// Brute Force Solution:
var productExceptSelfBrute = function (nums) {
  let product = 1;
  let isZeroPresent = false;
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      isZeroPresent = true;
      zeroCount++;
      continue;
    }
    product = product * nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    if (isZeroPresent) {
      if (zeroCount == 1) {
        nums[j] = nums[j] != 0 ? 0 : product;
      } else {
        nums[j] = 0;
      }
    } else {
      nums[j] = product / nums[j];
    }
  }
  return nums;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefixProduct = [];
  let suffixProduct = [];

  let result = [];

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    if (i == 0) {
      prefixProduct[i] = nums[i];
      suffixProduct[j] = nums[j];
    } else {
      prefixProduct[i] = prefixProduct[i - 1] * nums[i];
      suffixProduct[j] = suffixProduct[j + 1] * nums[j];
    }
  }

  for (let k = 0; k < nums.length; k++) {
    if (k == 0) {
      result[k] = 1 * suffixProduct[k + 1];
    } else if (k == nums.length - 1) {
      result[k] = prefixProduct[k - 1] * 1;
    } else {
      result[k] = prefixProduct[k - 1] * suffixProduct[k + 1];
    }

  }
  return result;
};




console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([2, 3]));
console.log(productExceptSelf([0, 4, 0]));
console.log(productExceptSelf([-1, -2, -3, -4]));
console.log(productExceptSelf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));