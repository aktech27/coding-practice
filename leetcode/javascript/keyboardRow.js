// Leetcode 500

/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.
In the American keyboard:
 - the first row consists of the characters "qwertyuiop",
 - the second row consists of the characters "asdfghjkl", and
 - the third row consists of the characters "zxcvbnm".

Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Explanation:
Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

Example 2:
Input: words = ["omk"]
Output: []

Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {

  const isSameRow = (str, set) => {
    for (let i = 1; i < str.length; i++) {
      if (!set.has(str[i])) {
        return false;
      }
    }
    return true;
  };
  const set1 = new Set(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']);
  const set2 = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']);
  const set3 = new Set(['z', 'x', 'c', 'v', 'b', 'n', 'm']);

  const ans = [];
  for (let word of words) {
    w = word.toLowerCase();
    if (set1.has(w[0])) {
      if (isSameRow(w, set1)) ans.push(word);
    } else if (set2.has(w[0])) {
      if (isSameRow(w, set2)) ans.push(word);
    } else {
      if (isSameRow(w, set3)) ans.push(word);
    }
  }
  return ans;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWords(["omk"]));
console.log(findWords(["adsdf", "sfd"]));
console.log(findWords(["a", "b", "c"]));
console.log(findWords(["QWERTY", "qwerty", "ASDF", "asdf", "ZXCV", "zxcv"]));
console.log(findWords(["Type", "row", "POP", "mMm"]));
console.log(findWords(["z"]));
console.log(findWords([""]));
console.log(findWords(["Aa", "Ss", "Dd", "Ff"]));
console.log(findWords(["Top", "MOM", "dad", "ALASKA"]));
