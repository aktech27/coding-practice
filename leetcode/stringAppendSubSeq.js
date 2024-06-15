// Leetcode 2486

/*
You are given two strings s and t consisting of only lowercase English letters.
Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.
A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  return t.length - j;
};

console.log(appendCharacters('coaching', 'coding'));
console.log(appendCharacters('abcde', 'a'));
console.log(appendCharacters('z', 'abcde'));
console.log(appendCharacters('ahamedkabeer', 'medk'));