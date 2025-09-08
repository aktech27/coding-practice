// Leetcode 461

/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  if (x === y) {
    return 0;
  }
  let a = x.toString(2), b = y.toString(2);
  let count = 0;
  if (a.length > b.length) {
    b = b.padStart(a.length, '0');
  } else {
    a = a.padStart(b.length, '0');
  }
  console.log(a.length, b.length);
  console.log(a, b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      count++;
    }
  }
  return count;
};

console.log(hammingDistance(1, 4));
console.log(hammingDistance(3, 1));
console.log(hammingDistance(83140, 2489124));
console.log(hammingDistance(2e30, 2489124));