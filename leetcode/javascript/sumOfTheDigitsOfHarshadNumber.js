/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  let sum = 0, n = x;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return x % sum == 0 ? sum : -1;
};

console.log(sumOfTheDigitsOfHarshadNumber(18));
console.log(sumOfTheDigitsOfHarshadNumber(23));
console.log(sumOfTheDigitsOfHarshadNumber(5));