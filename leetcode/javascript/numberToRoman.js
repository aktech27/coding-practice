// Leetcode 12

/*
Seven different symbols represent Roman numerals with the following values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
Given an integer, convert it to a Roman numeral.

*/


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const hashmap = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };
  if (hashmap[num]) {
    return hashmap[num];
  }
  const str = [];
  while (num > 0) {
    let n = (num % 10) * (10 ** str.length);
    if (hashmap[n]) {
      str.unshift(hashmap[n]);
    } else if ((num % 10) < 5) {
      let s = '';
      for (let i = 1; i <= num % 10; i++) {
        s += (hashmap[10 ** (str.length)]);
      }
      str.unshift(s);
    } else if ((num % 10) > 5) {
      let s = hashmap[(5 * (10 ** (str.length)))];
      for (let i = 1; i <= (num % 10) - 5; i++) {
        s += (hashmap[10 ** (str.length)]);
      }
      str.unshift(s);
    }
    num = Math.floor(num / 10);
  }
  return (str.join(''));
};

console.log(intToRoman(3749));
console.log(intToRoman(3249));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(10));
