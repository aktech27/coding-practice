// Leetcode 1525

/*
You are given a string s.
A split is called good if you can split s into two non-empty strings sleft and sright where their concatenation is equal to s (i.e., sleft + sright = s) and the number of distinct letters in sleft and sright is the same.
Return the number of good splits you can make in s.

Example 1:
Input: s = "aacaba"
Output: 2
Explanation: There are 5 ways to split "aacaba" and 2 of them are good. 
("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.

Example 2:
Input: s = "abcd"
Output: 1
Explanation: Split the string as follows ("ab", "cd").
*/

/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  let count = 0;
  const map1 = new Map();
  const map2 = new Map();
  for (let c of s) {
    map1.has(c) ? map1.set(c, map1.get(c) + 1) : map1.set(c, 1);
  }

  for (let c of s) {
    map2.has(c) ? map2.set(c, map2.get(c) + 1) : map2.set(c, 1);
    map1.get(c) == 1 ? map1.delete(c) : map1.set(c, map1.get(c) - 1);
    if (map1.size == map2.size) count++;
  }
  return count;
};

console.log(numSplits("aacaba"));
console.log(numSplits("abcd"));
console.log(numSplits("a"));