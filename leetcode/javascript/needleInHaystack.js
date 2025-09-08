// Leetcode 28

/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) {
    return -1;
  }
  if (needle === haystack) {
    return 0;
  }
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }
      if (j === needle.length - 1) {
        return i;
      }

    }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("leetcode", "ete"));
console.log(strStr("asfhjfjagfhjadgfj", "jagfhj"));
