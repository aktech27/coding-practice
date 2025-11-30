// Leetcode 819
/*
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.
The words in paragraph are case-insensitive and the answer should be returned in lowercase.
Note that words can not contain punctuation symbols.

Example 1:
Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.

Example 2:
Input: paragraph = "a.", banned = []
Output: "a"
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const bannedHash = {};
  const wordsHash = {};
  let word = '';
  let ans = '';

  for (let i = 0; i < banned.length; i++) {
    bannedHash[banned[i]] = true;
  }

  let j = 0;
  const regex = new RegExp(/[a-zA-Z]/);
  while (j <= paragraph.length) {
    if (regex.test(paragraph[j]) && j < paragraph.length) {
      word = word + paragraph[j].toLowerCase();
    } else {
      if (word.length && !bannedHash[word]) {
        if (!wordsHash[word]) {
          wordsHash[word] = 1;
          if (!ans) {
            ans = word;
          }
        } else {
          wordsHash[word] += 1;
          if (wordsHash[word] > wordsHash[ans]) {
            ans = word;
          }
        }
      }
      word = '';
    }
    j++;
  }

  return ans;
};


console.log(mostCommonWord("a", []));
console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
console.log(mostCommonWord("a.", []));
console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));
console.log(mostCommonWord("a b.b", []));