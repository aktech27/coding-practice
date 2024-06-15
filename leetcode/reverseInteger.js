// Leetcode 7

/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = Math.abs(x).toString().split("").reverse().join("");
  if (x < 0) {
    str = parseInt(str) * -1;
    if ((Math.pow(-2, 31)) > str) {
      return 0;
    }
  } else {
    str = parseInt(str);
    if ((Math.pow(2, 31) - 1) < str) {
      return 0;
    }
  }
  return str;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));