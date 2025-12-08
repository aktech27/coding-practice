// Leetcode 1925

/*
A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.
Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

Example 1:
Input: n = 5
Output: 2
Explanation: The square triples are (3,4,5) and (4,3,5).

Example 2:
Input: n = 10
Output: 4
Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).
*/

/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  if (n < 5) {
    return 0;
  }
  const arr = Array.from({ length: n }, (_, i) => Math.pow((i + 1), 2));
  const set = new Set(arr);

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (set.has(arr[i] + arr[j])) {
        count++;
      }
    }
  }

  return count * 2;
};

console.log(countTriples(5));
console.log(countTriples(10));
console.log(countTriples(1));
console.log(countTriples(2));
console.log(countTriples(3));
console.log(countTriples(50));
console.log(countTriples(100));
console.log(countTriples(12));
console.log(countTriples(13));
console.log(countTriples(250));
