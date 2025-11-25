// Leetcode 202
/*
Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
 - Starting with any positive integer, replace the number by the sum of the squares of its digits.
 - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 - Those numbers for which this process ends in 1 are happy.
 - Return true if n is a happy number, and false if not.

Example 1:
Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

Example 2:
Input: n = 2
Output: false
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const sumDigits = (x) => {
    sum = 0;
    while (x != 0) {
      k = x % 10;
      x = Math.floor(x / 10);
      sum += k * k;
    }
    return sum;
  };
  const seen = {};
  if (n == 1) {
    return true;
  }
  seen[n] = true;
  let i = 1;
  while (n != 1) {
    n = sumDigits(n);
    i++;
    if (n == 1 || seen[n]) {
      break;
    }
    seen[n] = true;
  }
  return n == 1 ? true : false;

};


console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(31));
console.log(isHappy(4));
console.log(isHappy(7));
console.log(isHappy(10));
console.log(isHappy(11));
console.log(isHappy(19));
console.log(isHappy(20));
console.log(isHappy(21));
console.log(isHappy(99));
console.log(isHappy(100));
console.log(isHappy(101));