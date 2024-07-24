// Leetcode 349

/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const hashMap = {};
  const intersection = [];
  for (let i = 0; i < nums1.length; i++) {
    hashMap[nums1[i]] = false;
  }
  for (let j = 0; j < nums2.length; j++) {
    if (hashMap[nums2[j]] !== undefined) {
      hashMap[nums2[j]] = true;
    }
  }
  for (const key in hashMap) {
    if (hashMap[key]) {
      intersection.push(+key);
    }
  }
  return intersection;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
