// Leetcode 2028

/*
you have observations of n + m 6-sided dice rolls with each face numbered from 1 to 6. n of the observations went missing, and you only have the observations of m rolls. Fortunately, you have also calculated the average value of the n + m rolls.

You are given an integer array rolls of length m where rolls[i] is the value of the ith observation. You are also given the two integers mean and n.

Return an array of length n containing the missing observations such that the average value of the n + m rolls is exactly mean. If there are multiple valid answers, return any of them. If no such array exists, return an empty array.

The average value of a set of k numbers is the sum of the numbers divided by k.

Note that mean is an integer, so the sum of the n + m rolls should be divisible by n + m.
*/

/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  let res = [];
  let sumOfM = rolls.reduce((a, r) => (a + r), 0);
  let totalObservations = rolls.length + n;
  let totalSum = mean * totalObservations;
  let sumOfN = totalSum - sumOfM;
  if (sumOfN > n * 6 || sumOfN < n) {
    return [];
  }
  let baseNumber = Math.floor(sumOfN / n);
  let remaining = sumOfN % n;
  for (let i = 0; i < n - remaining; i++) {
    res.push(baseNumber);
  }
  for (let j = 0; j < remaining; j++) {
    res.push(baseNumber + 1);
  }
  return res;
};

console.log(missingRolls([3, 2, 4, 3], 4, 2));
console.log(missingRolls([1, 5, 6], 3, 4));
console.log(missingRolls([1, 2, 3, 4], 6, 4));
console.log(missingRolls([5, 2, 3, 4, 5, 6], 5, 7));
console.log(missingRolls([6, 6, 6, 6], 6, 1));
console.log(missingRolls([1, 1, 1, 1], 6, 1));
console.log(missingRolls([1, 3, 5, 2, 6, 4, 3, 2, 5, 1, 6, 4, 2, 3, 5, 1, 4, 6, 2, 5, 3, 6, 1, 4, 5], 4, 100000));
