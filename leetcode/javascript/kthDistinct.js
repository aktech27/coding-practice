// Leetcode 2053

/*
A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.
*/

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const hashMap = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]] === undefined) {
      hashMap[arr[i]] = 1;
    } else {
      hashMap[arr[i]] = hashMap[arr[i]] + 1;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (hashMap[arr[j]] === 1) {
      count++;
      if (count == k) {
        return arr[j];
      }
    }
  }
  return "";
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistinct(["aaa", "aa", "a"], 1));
console.log(kthDistinct(["a", "b", "a"], 3));