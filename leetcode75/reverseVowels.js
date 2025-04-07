// Leetcode 345

/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"

Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let ptr1 = 0;
  let ptr2 = s.length - 1;
  let s1 = [];
  const vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true,
    'A': true,
    'E': true,
    'I': true,
    'O': true,
    'U': true,
  };
  while (ptr1 <= ptr2) {
    if (vowels[s[ptr1]] && vowels[s[ptr2]]) {
      s1[ptr1] = s[ptr2];
      s1[ptr2] = s[ptr1];
      ptr1 += 1;
      ptr2 -= 1;
    } else if (vowels[s[ptr1]] && !vowels[s[ptr2]]) {
      s1[ptr2] = s[ptr2];
      ptr2 -= 1;
    } else if (vowels[s[ptr2]] && !vowels[s[ptr1]]) {
      s1[ptr1] = s[ptr1];
      ptr1 += 1;
    } else {
      s1[ptr1] = s[ptr1];
      s1[ptr2] = s[ptr2];
      ptr1 += 1;
      ptr2 -= 1;
    }
  }
  return s1.join('');
};

console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("goOd"));
console.log(reverseVowels("yo! Bottoms Up, u.S. Motto, boy!"));
console.log(reverseVowels("a"));
console.log(reverseVowels("abA"));
console.log(reverseVowels("race car"));
