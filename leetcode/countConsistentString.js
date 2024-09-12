// Leetcode 1684

/*
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
Return the number of consistent strings in the array words.

Example 1:
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

Example 2:
Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.

Example 3:
Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
*/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    const hashMap = {};
    let count = words.length;
    for (let h = 0; h < allowed.length; h++) {
        hashMap[allowed[h]] = true;
    }
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (!hashMap[words[i][j]]) {
                count -= 1;
                break;
            }
        }
    }
    return count;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]));
console.log(countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]));
