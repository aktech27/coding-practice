// Leetcode 1636

/*
Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[`${nums[i]}`] === undefined) {
      hashMap[`${nums[i]}`] = 1;
    } else {
      hashMap[`${nums[i]}`] = hashMap[`${nums[i]}`] + 1;
    }
  }
  nums.sort((a, b) => b - a);
  nums.sort((a, b) => hashMap[a] - hashMap[b]);
  return nums;
};

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
console.log(frequencySort([2, 3, 1, 3, 2]));
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
