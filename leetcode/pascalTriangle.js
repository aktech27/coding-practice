// Leetcode 118

/*
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  function ncr(n, r) {
    function factorial(a) {
      if (a == 1 || a == 0) {
        return 1;
      } else {
        return a * factorial(a - 1);
      }
    }
    return factorial(n) / (factorial(n - r) * factorial(r));
  }
  const res = [];
  for (let i = 0; i < numRows; i++) {
    const ser = [];
    for (let j = 0; j <= i; j++) {
      ser.push(ncr(i, j));
    }
    res.push(ser);
  }
  return res;
};

console.log(generate(3));
console.log(generate(5));


