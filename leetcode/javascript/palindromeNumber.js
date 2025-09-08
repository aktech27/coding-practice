// Leetcode 9

/*
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  return x.toString() == x.toString().split("").reverse().join("");
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(0));