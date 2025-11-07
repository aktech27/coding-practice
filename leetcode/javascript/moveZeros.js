// Leetcode 283

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
1 <= nums.length <= 10^4
-2^31 <= nums[i] <= 2^31 - 1
 */



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let leftPtr = 0;
    let rightPtr = leftPtr + 1;
    while (rightPtr < nums.length) {
        if (nums[leftPtr] != 0) {
            leftPtr++;
            rightPtr = leftPtr + 1;
        }
        if (nums[rightPtr] == 0) {
            rightPtr++;
        }
        if (nums[leftPtr] == 0 && nums[rightPtr] != 0 && rightPtr < nums.length) {
            let temp = nums[leftPtr];
            nums[leftPtr] = nums[rightPtr];
            nums[rightPtr] = temp;
            leftPtr++;
            rightPtr = leftPtr + 1;
        }
    }
    return nums;
};


// Brute Force solution
var moveZeroesBrute = function (nums) {
    const res = [];
    let ptr1 = 0;
    while (ptr1 != nums.length) {
        if (nums[ptr1] != 0) {
            res.push(nums[ptr1]);
        }
        ptr1 += 1;
    }
    while (res.length != nums.length) {
        res.push(0);
    }
    return res;
};

// Best solution
var moveZeroesOptimal = function (nums) {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
    }
};


console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 1, 3, 12, 0, 0]));
console.log(moveZeroes([1, 3, 12, 0, 0]));
console.log(moveZeroes([0, 0, 1, 3, 12]));
console.log(moveZeroes([5, 7, 0, 0, 1, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([5, 0, 4, 0, 1, 1, 2, 0, 3, 4, 0, 5, 6]));