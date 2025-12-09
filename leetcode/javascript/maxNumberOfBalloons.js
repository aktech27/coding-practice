// Leetcode 1189

/*
A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.
Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0 
*/

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const hashObj = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };
  for (let i = 0; i < text.length; i++) {
    if (hashObj[text[i]] >= 0) {
      hashObj[text[i]] += 1;
    }
  }

  let max = Infinity;
  for (const letter in hashObj) {
    if (hashObj[letter] == 0 || ((letter == 'l' || letter == 'o') && hashObj[letter] == 1)) {
      return 0;
    }
    if (letter == 'l' || letter == 'o') {
      max = Math.min(hashObj[letter] / 2, max);
    } else {
      max = Math.min(hashObj[letter], max);
    }
  }
  return Math.floor(max);
};

console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("leetcode"));
console.log(maxNumberOfBalloons("balloon"));
console.log(maxNumberOfBalloons("bbaalllloooonnbbaalllloooonnbbaalllloooonnbbaalllloooonnbbaallloooonn"));
console.log(maxNumberOfBalloons("balloonballoon"));
console.log(maxNumberOfBalloons("bbaalllloooonnn"));
console.log(maxNumberOfBalloons("balon"));
console.log(maxNumberOfBalloons("bbaalloon"));
console.log(maxNumberOfBalloons("lllllloooooonnnn"));

