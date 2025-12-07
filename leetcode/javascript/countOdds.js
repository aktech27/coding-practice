// Leetcode 1523

/*
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

Example 1:
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:
Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
*/

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let count = Math.floor((high - low) / 2);
  if (low % 2 == 0 && high % 2 == 0) {
    return count;
  }
  return count + 1;

};

console.log(countOdds(3, 7));
console.log(countOdds(8, 10));
console.log(countOdds(0, 0));
console.log(countOdds(1, 1));
console.log(countOdds(0, 1));
console.log(countOdds(1, 2));
console.log(countOdds(999999999, 1000000000));
console.log(countOdds(1000000000, 1000000000));
console.log(countOdds(500000000, 500000001));
console.log(countOdds(2, 3));
console.log(countOdds(4, 4));

