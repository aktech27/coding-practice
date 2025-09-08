// Leetcode 1974

/*
There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer. A character can only be typed if the pointer is pointing to that character. The pointer is initially pointing to the character 'a'.
Each second, you may perform one of the following operations:

Move the pointer one character counterclockwise or clockwise.
Type the character the pointer is currently on.
Given a string word, return the minimum number of seconds to type out the characters in word.
*/

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  let time = 0;
  let ptr = 1;
  const hashMap = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26,
  };
  for (let i = 0; i < word.length; i++) {
    time += Math.min(Math.abs(ptr - hashMap[word[i]]), 26 - Math.abs(ptr - hashMap[word[i]]));
    ptr = hashMap[word[i]];
    time++;
  }
  return time;
};

console.log(minTimeToType("abc"));
console.log(minTimeToType("bza"));
console.log(minTimeToType("zjpc"));
console.log(minTimeToType("aaa"));
console.log(minTimeToType("zzzz"));
