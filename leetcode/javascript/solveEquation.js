// Leetcode 640

/*
Solve a given equation and return the value of 'x' in the form of a string "x=#value". The equation contains only '+', '-' operation, the variable 'x' and its coefficient. You should return "No solution" if there is no solution for the equation, or "Infinite solutions" if there are infinite solutions for the equation.

If there is exactly one solution for the equation, we ensure that the value of 'x' is an integer.
*/

/**
* @param {string} equation
* @return {string}
*/
var solveEquation = function (equation) {
  let ptr = 0;
  let [lhs, rhs] = equation.split('=');
  let coefficient = [];
  let coefficientSum = 0;
  let constants = [];
  let constantSum = 0;
  // console.log("LHS=", lhs, "RHS=", rhs);
  if (lhs == rhs) {
    return 'Infinite Solutions';
  }

  if (lhs.length == 1) {
    if (lhs === 'x') {
      coefficientSum += 1;
      coefficient.push(1);
    } else {
      constantSum += +lhs * -1;
      constants.push(+lhs * -1);
    }
  }
  if (rhs.length == 1) {
    if (rhs === 'x') {
      coefficientSum += -1;
      coefficient.push(-1);
    } else {
      constantSum += +rhs;
      constants.push(+rhs);
    }
  }
  // LHS traverse
  for (let i = 1; i < lhs.length; i++) {
    let substr;
    if (i == lhs.length - 1) {
      substr = lhs.substring(ptr, i + 1);
    }
    if (lhs[i] == '+' || lhs[i] == '-') {
      substr = lhs.substring(ptr, i);
      ptr = i;
    }
    if (substr && substr[substr.length - 1] == 'x') {
      substr = substr.replace('x', '');
      if (substr === '' || substr === '+' || substr === '-') {
        substr += '1';
      }
      coefficientSum += +substr;
      coefficient.push(+substr);
    } else if (substr && substr[substr.length - 1] != 'x') {
      constantSum += +substr * -1;
      constants.push(+substr * -1);
    }
  }

  // RHS traverse
  ptr = 0;
  for (let i = 1; i < rhs.length; i++) {
    let substr;
    if (i == rhs.length - 1) {
      substr = rhs.substring(ptr, i + 1);
    }
    if (rhs[i] == '+' || rhs[i] == '-') {
      substr = rhs.substring(ptr, i);
      ptr = i;
    }
    if (substr && substr[substr.length - 1] == 'x') {
      substr = substr.replace('x', '');
      if (substr === '' || substr === '+' || substr === '-') {
        substr += '1';
      }
      coefficientSum += +substr * -1;
      coefficient.push(+substr * -1);
    } else if (substr && substr[substr.length - 1] != 'x') {
      constantSum += +substr;
      constants.push(+substr);
    }
  }
  // console.log(coefficient, constants);
  // console.log(coefficientSum, constantSum);
  if (coefficientSum == 0 && constantSum != 0) {
    return 'No Solution';
  }

  if (coefficientSum == 0 && constantSum == 0) {
    return 'Infinite Solutions';
  }

  return `x=${constantSum / coefficientSum}`;
};

console.log(solveEquation("x+5-3+x=6+x-2"));
console.log(solveEquation("x=x"));
console.log(solveEquation("5x=2x+3x"));
console.log(solveEquation("2x=x"));
console.log(solveEquation("x-x=1"));
console.log(solveEquation("-x=-1"));
console.log(solveEquation("5-x=1"));
console.log(solveEquation("x=9"));
