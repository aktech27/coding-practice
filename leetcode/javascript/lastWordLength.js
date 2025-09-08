// Leetcode 58

/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let words = s.split(' ').filter((e)=>e.length>=1);
   return words[words.length-1].length;
};
