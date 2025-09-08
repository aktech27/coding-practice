// Leetcode 125

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let s1 = (s.toLowerCase().replaceAll(new RegExp(/[^a-zA-Z0-9]/g), ""));
  console.log(s1);
  if (s1 === s1.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome("0P"));