// Leetcode 14

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }
  let common = strs[0][0] || "";
  for (let ptr = 0; ptr < strs[0].length; ptr++) {
    for (let i = 1; i < strs.length; i++) {
      if (common != strs[i].substring(0, ptr + 1)) {
        return common.slice(0, -1);
      }
    }
    if (strs[0][ptr + 1]) {
      common += strs[0][ptr + 1];
    }
  }
  return common;
};

console.log(longestCommonPrefix(["flower", "flower", "flower"]));
console.log(longestCommonPrefix(["", ""]));
console.log(longestCommonPrefix(["rat", "hel"]));
console.log(longestCommonPrefix(["flower", "flow"]));