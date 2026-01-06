// Leetcode 290

/*
Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:
 - Each letter in pattern maps to exactly one unique word in s.
 - Each unique word in s maps to exactly one letter in pattern.
 - No two letters map to the same word, and no two words map to the same letter.

Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Explanation:
The bijection can be established as:
'a' maps to "dog".
'b' maps to "cat".

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(' ');
  if (words.length != pattern.length) return false;
  const map = new Map();
  const map2 = new Map();
  for (let i = 0; i < words.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) != words[i]) {
        return false;
      }
    } else if (map2.has(words[i])) {
      if (map2.get(words[i]) != pattern[i]) {
        return false;
      }
    } else {
      map.set(pattern[i], words[i]);
      map2.set(words[i], pattern[i]);
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("a", "cat cat"));
console.log(wordPattern("abba", "dog dog dog dog"));