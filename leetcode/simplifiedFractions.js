// Leetcode 1447

/*
Given an integer n, return a list of all simplified fractions between 0 and 1 (exclusive) such that the denominator is less-than-or-equal-to n. You can return the answer in any order.
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  const isSimplifyable = (a, b) => {
    let flag = false;
    for (let i = 2; i <= a && i <= b; i++) {
      if ((a % i == 0) && (b % i == 0)) {
        flag = true;
        break;
      }
    }
    return flag;
  };
  const fractions = [];
  for (let denominator = 2; denominator <= n; denominator++) {
    for (let numerator = 1; numerator < denominator; numerator++) {
      const status = isSimplifyable(numerator, denominator);
      if (!status) {
        fractions.push(`${numerator}/${denominator}`);
      }
    }

  }
  return fractions;
};

console.log(simplifiedFractions(2));
console.log(simplifiedFractions(3));
console.log(simplifiedFractions(4));
console.log(simplifiedFractions(12));
console.log(simplifiedFractions(47));
console.log(simplifiedFractions(100));
console.log(simplifiedFractions(34));
