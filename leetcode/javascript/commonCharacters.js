// Leetcode 1002

/*
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const lettersHash = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      if (lettersHash[letter]) {
        if (lettersHash[letter][i]) {
          lettersHash[letter][i]++;
        } else {
          lettersHash[letter][i] = 1;
        }
      } else {
        lettersHash[letter] = [];
        lettersHash[letter][i] = 1;
      }
    }
  }
  let res = [];
  Object.keys(lettersHash).forEach((k) => {
    if ((lettersHash[k]?.length === words.length) && lettersHash[k][0] != null) {
      let l = Math.min(...lettersHash[k]);
      for (let it = 0; it < l; it++) {
        res.push(k);
      }
    }
  });
  return res;
};

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool", "lock", "cook"]));
console.log(commonChars(["ahame", "aham", "kabeea"]));
