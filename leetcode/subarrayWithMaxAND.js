//Leetcode 2419

/*
You are given an integer array nums of size n.
Consider a non-empty subarray from nums that has the maximum possible bitwise AND.
In other words, let k be the maximum value of the bitwise AND of any subarray of nums. Then, only subarrays with a bitwise AND equal to k should be considered.
Return the length of the longest such subarray.
The bitwise AND of an array is the bitwise AND of all the numbers in it.
A subarray is a contiguous sequence of elements within an array.

Example 1:
Input: nums = [1,2,3,3,2,2]
Output: 2
Explanation:
The maximum possible bitwise AND of a subarray is 3.
The longest subarray with that value is [3,3], so we return 2.

Example 2:
Input: nums = [1,2,3,4]
Output: 1
Explanation:
The maximum possible bitwise AND of a subarray is 4.
The longest subarray with that value is [4], so we return 1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let longest = 1;
    let max = Math.max(...nums);
    let ptr1 = 0, ptr2 = 1;
    while (ptr2 < nums.length) {
        if ((nums[ptr1] == nums[ptr2]) && nums[ptr1] >= max) {
            ptr2 = ptr2 + 1;
            longest = Math.max(ptr2 - ptr1, longest)
        } else {
            ptr1 = ptr2;
            ptr2 = ptr1 + 1;
        }
    }
    return longest;
};

console.log(longestSubarray([1, 2, 3, 3, 2, 2]));
console.log(longestSubarray([1, 2, 3, 4]));
console.log(longestSubarray([1, 2, 3, 3, 3, 2, 2, 4, 4, 4]));
console.log(longestSubarray([1, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4]));
console.log(longestSubarray([100, 5, 5]));
console.log(longestSubarray([96317, 96317, 96317, 96317, 96317, 96317, 96317, 96317, 96317, 279979]));
console.log(longestSubarray([311155, 311155, 311155, 311155, 311155, 311155, 311155, 311155, 201191, 311155]));
