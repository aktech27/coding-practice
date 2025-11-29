// Leetcode 125

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let L = 0, R = s.length - 1;
  while (L < R) {
    if (!(new RegExp(/[a-zA-Z0-9]/i).test(s[L]))) {
      L++;
    } else if (!(new RegExp(/[a-zA-Z0-9]/i).test(s[R]))) {
      R--;
    } else if (s[L].toLowerCase() == s[R].toLowerCase()) {
      L++;
      R--;
    } else {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeBrute = function (s) {
  let s1 = (s.toLowerCase().replaceAll(new RegExp(/[^a-zA-Z0-9]/g), ""));
  console.log(s1);
  if (s1 === s1.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome(".,,/!!"));
console.log(isPalindrome("0P"));
console.log(isPalindrome("ab_a"));
console.log(isPalindrome("aa"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("abcba"));
console.log(isPalindrome("abcd"));
console.log(isPalindrome("Aa"));
console.log(isPalindrome("aaA"));
console.log(isPalindrome("   A"));
console.log(isPalindrome("A   "));
