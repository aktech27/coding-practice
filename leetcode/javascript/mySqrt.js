// Leetcode 69

/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) return x;
  let L = 0, R = x;
  while (L <= R) {
    let M = Math.floor((L + R) / 2);
    if (M * M == x) {
      return M;
    } else if (M * M < x) {
      L = M + 1;
    } else {
      R = M - 1;
    }
  }
  return R;
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(2));
console.log(mySqrt(1));
console.log(mySqrt(0));
console.log(mySqrt(25));