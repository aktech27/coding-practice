// Leetcode 767

/*
Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
Return any possible rearrangement of s or return "" if not possible.

Example 1:
Input: s = "aab"
Output: "aba"

Example 2:
Input: s = "aaab"
Output: ""
*/

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  if (s.length == 1) return s;
  let ans = new Array(s.length);
  let hashObj = {};
  for (let i = 0; i < s.length; i++) {
    if (!hashObj[s[i]]) {
      hashObj[s[i]] = 1;
    } else {
      hashObj[s[i]] += 1;
    }
  }
  let sorted = Object.keys(hashObj).sort((a, b) => (hashObj[b] - hashObj[a]));

  //More than half the length of string, so impossible
  if (hashObj[sorted[0]] > Math.ceil(s.length / 2)) {
    return "";
  }

  let i = 0;
  while (hashObj[sorted[0]] > 0) {
    ans[i] = sorted[0];
    i += 2;
    hashObj[sorted[0]]--;
  }

  for (const c of sorted) {
    while (hashObj[c] > 0) {
      if (i >= s.length) i = 1;
      ans[i] = c;
      hashObj[c]--;
      i += 2;
    }
  }

  return ans.join('');
};

console.log(reorganizeString("aab"));
console.log(reorganizeString("aaab"));
console.log(reorganizeString("a"));
console.log(reorganizeString("aa"));
console.log(reorganizeString("ab"));
console.log(reorganizeString("aba"));
console.log(reorganizeString("vvvlo"));
console.log(reorganizeString("bbbbcc"));
