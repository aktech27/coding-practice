// Leetcode 88

/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeBrute = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
    nums1[m + i] = nums2[i];
  }
  for (i = 1; i < nums1.length; i++) {
    let toInsert = nums1[i];
    for (j = i - 1; j >= 0; j--) {
      if (toInsert < nums1[j]) {
        nums1[j + 1] = nums1[j];
      } else {
        break;
      }
    }
    nums1[j + 1] = toInsert;
  }
  console.log(nums1);
};

// Optimal Solution using two pointers:
var merge = function (nums1, m, nums2, n) {
  let i = m + n - 1;
  let ptr1 = m - 1;
  let ptr2 = n - 1;

  while (ptr1 >= 0 && ptr2 >= 0) {
    if (nums1[ptr1] > nums2[ptr2]) {
      nums1[i] = nums1[ptr1];
      ptr1--;
      i--;
    } else {
      nums1[i] = nums2[ptr2];
      ptr2--;
      i--;
    }
  }

  while (ptr2 >= 0) {
    nums1[i] = nums2[ptr2];
    ptr2--;
    i--;
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5);
merge([1, 2, 4, 5, 6, 0], 5, [3], 1);
merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3);
merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);