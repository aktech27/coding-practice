// Leetcode 205

/*
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
Explanation:
The strings s and t can be made identical by:
Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

Example 2:
Input: s = "foo", t = "bar"
Output: false
Explanation:
The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:
Input: s = "paper", t = "title"
Output: true
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const hashObj1 = {};
  const hashObj2 = {};

  for (let i = 0; i < s.length; i++) {
    if (
      (hashObj1[s[i]] != undefined && hashObj1[s[i]] != t[i]) || 
      (hashObj2[t[i]] != undefined && hashObj2[t[i]] != s[i])
    ) {
      return false;
    }
    hashObj1[s[i]] = t[i];
    hashObj2[t[i]] = s[i];
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));
console.log(isIsomorphic("abab", "baba"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
console.log(isIsomorphic("abcdefghijklmnopqrstuvwxyz", "aaaaaaaaaaaaaaaaaaaaaaaaaa"));
console.log(isIsomorphic("aba", "baa"));
console.log(isIsomorphic("aaeaa", "aabbb"));
console.log(isIsomorphic("xyz", "xyy"));
