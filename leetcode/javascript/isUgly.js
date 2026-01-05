// Leetcode 263

/*
An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.
Given an integer n, return true if n is an ugly number.

Example 1:
Input: n = 6
Output: true
Explanation: 6 = 2 × 3

Example 2:
Input: n = 1
Output: true
Explanation: 1 has no prime factors.

Example 3:
Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;
  while (n > 1) {
    if (n % 2 != 0 && n % 3 != 0 && n % 5 != 0) return false;
    if (n % 5 == 0) n = n / 5;
    if (n % 3 == 0) n = n / 3;
    if (n % 2 == 0) n = n / 2;
  }
  return true;
};

console.log(isUgly(6));
console.log(isUgly(1));
console.log(isUgly(14));
console.log(isUgly(30));
console.log(isUgly(13));
console.log(isUgly(8));