// Leetcode 1122

/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const hashMap = {};
  const MAX_LENGTH = 1000; // Constraint given
  for (let i = 0; i < arr2.length; i++) {
    hashMap[arr2[i]] = i;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (hashMap[arr1[i]] === undefined) {
      hashMap[arr1[i]] = MAX_LENGTH + arr1[i];
    }
  }
  arr1.sort((a, b) => {
    if (hashMap[a] !== undefined && hashMap[b] !== undefined) {
      return hashMap[a] - hashMap[b];
    }
  });
  return arr1;
};

// console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
// console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
// console.log(relativeSortArray([28, 6, 22, 8, 44, 17, 3, 2, 1], [22, 28, 8, 6]));

const arrX = [1, 2, 4, 5, 4, 2, 8, 1];

arrX.sort((a, b) => {
  console.log(a, b);
  return a - b;
});