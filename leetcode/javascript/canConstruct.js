// Leetcode 383

/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let ans = true;
  if (ransomNote.length > magazine.length) {
    return false;
  }
  const hash1 = {};
  const hash2 = {};
  for (let i = 0; i < magazine.length; i++) {
    if (!hash1[magazine[i]]) {
      hash1[magazine[i]] = 1;
    } else {
      hash1[magazine[i]] += 1;
    }

    if (ransomNote[i]) {
      if (!hash2[ransomNote[i]]) {
        hash2[ransomNote[i]] = 1;
      } else {
        hash2[ransomNote[i]] += 1;
      }
    }
  }
  Object.keys(hash2).forEach((key) => {
    if (!(hash1[key] && hash2[key] && hash1[key] >= hash2[key])) {
      ans = false;
    }
  });
  return ans;
};

console.log(canConstruct("aaabcx", "abchsttttaa"));
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));