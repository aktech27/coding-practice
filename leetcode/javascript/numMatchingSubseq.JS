// Leetcode 792

/*
Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
For example, "ace" is a subsequence of "abcde".

Example 1:
Input: s = "abcde", words = ["a","bb","acd","ace"]
Output: 3
Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".

Example 2:
Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
Output: 2
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  const binarySearch = (arr, target) => {
    let L = 0, R = arr.length;
    while (L < R) {
      const mid = Math.floor((L + R) / 2);
      if (arr[mid] < target) L = mid + 1;
      else R = mid;
    }
    return L;
  };

  let count = 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.get(s[i]).push(i) : map.set(s[i], [i]);
  }

  for (let w of words) {
    let valid = true;
    let lastIndex = -1;
    for (let c of w) {
      if (map.has(c)) {
        let occurences = map.get(c);
        const pos = binarySearch(occurences, lastIndex + 1);
        if (pos === occurences.length) {
          valid = false;
        }
        lastIndex = occurences[pos];
      } else {
        valid = false;
        break;
      }
    }
    if (valid) count++;
  }
  return count;
};

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));
console.log(numMatchingSubseq("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"]));
console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace", "bd", "bdd", "db", "abcdex"]));