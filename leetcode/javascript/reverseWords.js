// Leetcode 151

/*
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string. 
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let i = s.length - 1;
  let j = s.length - 1;
  let ans = '';
  let word = '';
  while (i >= 0) {
    if (s[i] != ' ') {
      j = i - 1;
      word = word + s[i];
      while (s[j] != ' ' && j >= 0) {
        j--;
      }
      ans = ans + s.slice(j + 1, i + 1) + ' ';
      i = j;
    }
    i--;
  }
  return ans.trim();
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
console.log(reverseWords("    123"));
console.log(reverseWords("word"));
console.log(reverseWords("   single"));
console.log(reverseWords("multiple    spaces   here"));
console.log(reverseWords("  leading and trailing   "));
console.log(reverseWords("   a   b   c   "));
console.log(reverseWords("      spaced     out      words      "));
