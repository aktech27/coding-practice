// Leetcode 592

/*
Given a string expression representing an expression of fraction addition and subtraction, return the calculation result in string format.

The final result should be an irreducible fraction. If your final result is an integer, change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1.
*/

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  const findGCD = (m, n) => {
    if (n == 0) {
      return m;
    }
    return findGCD(n, m % n);
  };
  let ptr = 0;
  let numerators = [];
  let denominators = [];
  let denominatorProduct = 1;
  let numeratorSum = 0;
  for (let i = 1; i < expression.length; i++) {
    let fraction;
    if (expression[i] == '+' || expression[i] == '-') {
      fraction = expression.substring(ptr, i);
      ptr = i;
    }
    if (i == expression.length - 1) {
      fraction = expression.substring(ptr, i + 1);
    }
    if (fraction) {
      numerators.push(+fraction.split('/')[0]);
      denominators.push(+fraction.split('/')[1]);
      denominatorProduct *= +fraction.split('/')[1];
    }
  }
  console.log("Num==>", numerators, "Den-->", denominators, denominatorProduct);
  for (let j = 0; j < numerators.length; j++) {
    numeratorSum += numerators[j] * (denominatorProduct / denominators[j]);
  }
  if (numeratorSum == 0) {
    return `0/1`;
  }
  let gcd = findGCD(Math.abs(numeratorSum), Math.abs(denominatorProduct));
  return `${numeratorSum / gcd}/${denominatorProduct / gcd}`;
};

console.log(fractionAddition("-1/2+1/2"));
console.log(fractionAddition("-1/2+1/2+1/3"));
console.log(fractionAddition("1/3-1/2"));
console.log(fractionAddition("3/10-10/9"));
console.log(fractionAddition("-10/3-10/9"));
console.log(fractionAddition("5/1-10/1"));
console.log(fractionAddition("-5/1-10/2"));
