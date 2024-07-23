// Leetcode 2303

/*
You are given a 0-indexed 2D integer array brackets where brackets[i] = [upperi, percenti] means that the ith tax bracket has an upper bound of upperi and is taxed at a rate of percenti. The brackets are sorted by upper bound (i.e. upperi-1 < upperi for 0 < i < brackets.length).

Tax is calculated as follows:

The first upper0 dollars earned are taxed at a rate of percent0.
The next upper1 - upper0 dollars earned are taxed at a rate of percent1.
The next upper2 - upper1 dollars earned are taxed at a rate of percent2.
And so on.
You are given an integer income representing the amount of money you earned. Return the amount of money that you have to pay in taxes. Answers within 10-5 of the actual answer will be accepted.
*/

/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let tax = 0.0;
  if (income == 0) {
    return tax;
  }
  if (brackets[0][0] >= income) {
    tax = income * (brackets[0][1] / 100);
    return tax;
  } else {
    tax = brackets[0][0] * (brackets[0][1] / 100);
    income = income - brackets[0][0];
  }
  for (let i = 1; i < brackets.length; i++) {
    if ((brackets[i][0] - brackets[i - 1][0]) >= income) {
      tax += income * (brackets[i][1] / 100);
      break;
    } else {
      tax += (brackets[i][0] - brackets[i - 1][0]) * (brackets[i][1] / 100);
      income = income - (brackets[i][0] - brackets[i - 1][0]);
    }
  }
  return tax;
};

console.log(calculateTax([[3, 50], [7, 10], [12, 25]], 10));
console.log(calculateTax([[1, 0], [4, 25], [5, 50]], 2));
console.log(calculateTax([[2, 50]], 0));
