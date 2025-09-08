// Leetcode 1071

/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  const gcd = (m, n) => {
    if (n == 0) {
      return m;
    }
    return gcd(n, m % n);
  };
  const len = gcd(str1.length, str2.length);
  const gcdStr = str1.slice(0, len);
  if (str2.replaceAll(gcdStr, "").length) {
    return "";
  }
  if (str1.replaceAll(gcdStr, "").length) {
    return "";
  }
  return gcdStr;
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(gcdOfStrings("LEET", "LEET"));
console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"));
console.log(gcdOfStrings("AAAA", "AXBCY"));
console.log(gcdOfStrings("AXBCY", "AAAA"));
