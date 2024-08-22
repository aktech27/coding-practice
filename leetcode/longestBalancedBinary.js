// Leetcode 2609

/*
You are given a binary string s consisting only of zeroes and ones.

A substring of s is considered balanced if all zeroes are before ones and the number of zeroes is equal to the number of ones inside the substring. Notice that the empty substring is considered a balanced substring.

Return the length of the longest balanced substring of s.

A substring is a contiguous sequence of characters within a string.
*/

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  let maxLength = 0;
  let ptr1 = -1;
  let ptr0 = s.indexOf('0');
  // Edge Case No zeros
  if (ptr0 == -1) {
    return 0;
  }
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '1' && i > ptr0) {
      ptr1 = i;
      break;
    }
  }
  if (ptr1 == -1) {
    return 0;
  }
  ptr0 = ptr1 - 1;
  while (ptr1 < s.length) {
    if (s[ptr1] == '1' && s[ptr0] == '0') {
      if (maxLength < (ptr1 - ptr0)) {
        maxLength = ptr1 - ptr0;
      }
      ptr1++;
      ptr0--;
      if (ptr0 < 0) {
        ptr0 = s.indexOf('0', ptr1);
        if (ptr0 == -1) {
          break;
        }
        for (let i = ptr1 + 1; i < s.length; i++) {
          if (s[i] === '1' && i > ptr0) {
            ptr1 = i;
            ptr0 = i - 1;
            break;
          }
        }
      }
    }
    if (s[ptr1] == '0') {
      ptr1++;
      ptr0 = ptr1 - 1;
    }
    if (s[ptr0] == '1') {
      ptr1++;
      ptr0 = ptr1 - 1;
    }
  }
  // console.log(ptr0, ptr1);
  return maxLength + 1;
};

console.log(findTheLongestBalancedSubstring("01000111"));
console.log(findTheLongestBalancedSubstring("00111"));
console.log(findTheLongestBalancedSubstring("111"));
console.log(findTheLongestBalancedSubstring("0000"));
console.log(findTheLongestBalancedSubstring("00001111"));
console.log(findTheLongestBalancedSubstring("11001001111"));
