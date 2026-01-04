// Leetcode 1390

/*
Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. If there is no such integer in the array, return 0.

Example 1:
Input: nums = [21,4,7]
Output: 32
Explanation: 
21 has 4 divisors: 1, 3, 7, 21
4 has 3 divisors: 1, 2, 4
7 has 2 divisors: 1, 7
The answer is the sum of divisors of 21 only.

Example 2:
Input: nums = [21,21]
Output: 64

Example 3:
Input: nums = [1,2,3,4,5]
Output: 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
  const getDivisorsSum = (n) => {
    let count = 2;
    let sum = 1 + n;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (count > 4) {
        return 0;
      }
      if (n % i == 0) {
        sum += i;
        count++;
        if (n / i != i) {
          count++;
          sum += n / i;
        }
      }
    }
    return count == 4 ? sum : 0;
  };
  let ans = 0;
  const seen = new Map();
  for (const n of nums) {
    if (seen.has(n)) {
      ans += seen.get(n);
    } else {
      let sum = getDivisorsSum(n);
      seen.set(n, sum);
      ans += sum;
    }
  }
  return ans;
};

console.log(sumFourDivisors([16, 21, 4, 7, 10000]));
console.log(sumFourDivisors([21, 21]));
console.log(sumFourDivisors([1, 2, 3, 4, 5]));
console.log(sumFourDivisors([6, 8, 10, 14]));
console.log(sumFourDivisors([15, 16, 17, 18]));
console.log(sumFourDivisors([33, 22, 26, 27, 28]));
console.log(sumFourDivisors([6, 10, 14, 15, 21, 22, 26, 33, 35, 38, 39, 46, 51, 55, 57, 58, 62, 65, 69, 74]));
console.log(sumFourDivisors([6, 10, 14, 15, 21, 22, 26, 33, 35, 38, 39, 46, 51, 55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95, 106, 111, 115, 118, 119, 122, 129, 133, 134, 141, 142]));