// Leetcode 1945

/*
You are given a string s consisting of lowercase English letters, and an integer k.

First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.

For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
Transform #2: 17 ➝ 1 + 7 ➝ 8
Return the resulting integer after performing the operations described above.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    const hashMap = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9, 's': 10, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8,
    };
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum += hashMap[s[i]];
    }
    if (k == 1) {
        return sum;
    }
    let i = 1;
    while (i < k) {
        sum = sum.toString().split('').reduce((a, s) => (a + parseInt(s)), 0);
        if (sum < 10) {
            return sum;
        }
        i++;
    }
    return sum;
};

console.log(getLucky("iiii", 1));
console.log(getLucky("leetcode", 2));
console.log(getLucky("zbax", 2));
console.log(getLucky("abcdefghijklmnopqrstuvwxyz", 1));
