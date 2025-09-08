// Leetcode 38

/*
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the run-length encoding of countAndSay(n - 1).
Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".

Given a positive integer n, return the nth element of the count-and-say sequence.

 

Example 1:

Input: n = 4

Output: "1211"

Explanation:

countAndSay(1) = "1"
countAndSay(2) = RLE of "1" = "11"
countAndSay(3) = RLE of "11" = "21"
countAndSay(4) = RLE of "21" = "1211"
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  function rle(x) {
    let ptr1 = 0;
    let ptr2 = 1;
    // let count = 1;
    let str = '';
    while (ptr1 < x.length) {
      if (x[ptr1] == x[ptr2]) {
        // count++;
        ptr2++;
      } else {
        // str += `${count}${x[ptr1]}`;
        str += `${ptr2 - ptr1}${x[ptr1]}`;
        ptr1 = ptr2;
        ptr2 = ptr1 + 1;
        // count = 1;
      }
    }
    return str;
  }
  if (n == 1) {
    return "1";
  }
  return rle(countAndSay(n - 1));
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(10));
console.log(countAndSay(29));
console.log(countAndSay(30));
