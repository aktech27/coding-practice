// Leetcode 242

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false 
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  let hashObj1 = {};
  let hashObj2 = {};
  for (let i = 0; i < s.length; i++) {
    hashObj1[s[i]] = hashObj1[s[i]] ? hashObj1[s[i]] + 1 : 1;
    hashObj2[t[i]] = hashObj2[t[i]] ? hashObj2[t[i]] + 1 : 1;
  }

  for (const key in hashObj1) {
    if (hashObj1[key] != hashObj2[key]) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));