// Leetcode 541

/*
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let res = '';
  let swap = true;
  for (let i = 0; i < s.length; i += k) {
    if (swap) {
      res += s.substring(i, i + k).split('').reverse().join('');
      swap = false;
    } else {
      res += s.substring(i, i + k);
      swap = true;
    }
  }
  return res;
};

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));
console.log(reverseStr("abcd", 20));
console.log(reverseStr("onetwoten", 3));
