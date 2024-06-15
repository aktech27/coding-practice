// Leetcode 409

/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest 
palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const lettersHash = {};
  let length = 0;
  let odd = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (lettersHash[element]) {
      lettersHash[element]++;
      // if (lettersHash[element] % 2 == 0) {
      //   length += 2;
      // }
    } else {
      lettersHash[element] = 1;
    }
  }
  Object.keys(lettersHash).map((k) => {
    if (lettersHash[k] % 2 == 0) {
      length += lettersHash[k];
    } else {
      odd = 1;
      length += lettersHash[k] - 1;
    }
  });
  return length + odd;
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("aaabkbccc"));
console.log(longestPalindrome("bananas"));
