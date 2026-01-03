// Leetcode 3

/*
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max_len = 0, ptr1 = 0, ptr2 = 0;
  if (s.length == 0 || s.length == 1) return s.length;
  const map = new Map();
  while (ptr2 < s.length) {
    if (map.has(s[ptr2])) {
      ptr1 = Math.max(ptr1, map.get(s[ptr2]) + 1);
    }
    map.set(s[ptr2], ptr2);
    ptr2++;
    max_len = Math.max(max_len, ptr2 - ptr1);
  }
  return max_len;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcdef123 abcd"));
console.log(lengthOfLongestSubstring("tmmzuxt"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("ckilbkd"));