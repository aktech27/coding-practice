// Leetcode 6

/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convertOld = function (s, numRows) {
  if (numRows == 1) {
    return s;
  }
  const arr = [];
  const chars = s.split('');
  let col = 0;
  let row = 0;
  let ind = 0;
  let res = '';
  for (let i = 0; i < numRows; i++) {
    arr[i] = [];
  }
  while (ind < chars.length) {
    if (row == 0) { // Go Down
      while ((row < numRows) && (ind < chars.length)) {
        if (!arr[row][col]) {
          arr[row][col] = chars[ind];
          ind++;
        }
        row++;
      }
      row--;
    }
    if (row != 0) {
      while ((row != 0) && (ind < chars.length)) {
        row--;
        col++;
        arr[row][col] = chars[ind];
        ind++;
      }
    }
  }
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < Math.ceil(s.length / 2); c++) {
      if (arr[r][c])
        res += (arr[r][c]);
    }
  }
  return res;
};


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let ans = '';
  if (numRows == 1 || numRows >= s.length) {
    return s;
  }
  let row = 1;
  let n = 2 * (numRows - 1);
  while (row <= numRows) {
    for (let i = row - 1; i < s.length; i = i + n) {
      ans = ans + s[i];
      let m = (i + n) - (2 * (row - 1));
      if (row > 1 && row < numRows && m < s.length) {
        ans = ans + s[m];
      }
    }
    row++;
  }
  return ans;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));
console.log(convert("AB", 1));
console.log(convert("AB", 2));
console.log(convert("ABCDE", 4));
console.log(convert("ABCDE", 1));
console.log(convert("ABCDEFGHIJK", 2));
console.log(convert("ABCDEFGHIJK", 10));
console.log(convert("", 3));
console.log(convert("AAAABBBBCCCC", 3));