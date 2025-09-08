// Leetcode 884

/*
A sentence is a string of single-space separated words where each word consists only of lowercase letters.
A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

Example 1:
Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]
Explanation:
The word "sweet" appears only in s1, while the word "sour" appears only in s2.

Example 2:
Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]
*/

 /**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let uncommon = [];
    const hashMap = {};
    let words = [...s1.split(' '), ...s2.split(' ')]
    for (let i = 0; i < words.length; i++) {
        if (!hashMap[words[i]]) {
            hashMap[words[i]] = 1;
        } else {
            hashMap[words[i]] = hashMap[words[i]] + 1;
        }
    }
    let keys = Object.keys(hashMap);
    for (let j = 0; j < keys.length; j++) {
        if (hashMap[keys[j]] == 1) {
            uncommon.push(keys[j])
        }
    }
    return uncommon;
};
