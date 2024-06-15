// Leetcode 8

/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
The algorithm for myAtoi(string s) is as follows:
- 1. Whitespace: Ignore any leading whitespace (" ").
- 2. Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
- 3. Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
- 4. Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.
*/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let str = s.trim();
  let isNegative = false;
  if (str[0] === '-') {
    str = str.replace('-', '');
    isNegative = true;
  } else if (str[0] === '+') {
    str = str.replace('+', '');
    isNegative = false;
  }
  for (let i = 0; i < str.length; i++) {
    if (new RegExp(/[+a-zA-Z.-]/g).test(str[i])) {
      str = str.substring(0, i);
      break;
    }

  }
  let res = 0;
  if (!str || str[0] == ' ') {
    res = 0;
  } else if (isNegative) {
    res = parseInt(str) * -1;
  } else {
    res = parseInt(str);
  }
  if (res < Math.pow(-2, 31)) {
    res = Math.pow(-2, 31);
  }
  if (res > (Math.pow(2, 31) - 1)) {
    res = Math.pow(2, 31) - 1;
  }
  return res;
};

// console.log(myAtoi("42"));
// console.log(myAtoi(" -042"));
// console.log(myAtoi("1337c0d3"));
// console.log(myAtoi("0-1"));
// console.log(myAtoi("words and 987"));
// console.log(myAtoi("-3147483648"));
console.log(myAtoi("+-12"));
console.log(myAtoi("-+12"));
console.log(myAtoi("  +  413"));
console.log(myAtoi("4193 with words"));