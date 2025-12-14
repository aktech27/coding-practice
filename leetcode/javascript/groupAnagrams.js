// Leetcode 49

/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashObj = {};
  for (let i = 0; i < strs.length; i++) {
    let key = [...strs[i]].toSorted();
    if (hashObj[key]) {
      hashObj[key].push(strs[i]);
    } else {
      hashObj[key] = [strs[i]];
    }
  }

  return Object.values(hashObj);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["", ""]));
console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx", "yxz", "foo"]));
console.log(groupAnagrams(["a", "b", "c"]));
console.log(groupAnagrams(["ab", "ba", "abc", "cba", "bac", "foo", "ofo"]));
console.log(groupAnagrams(["aaaaaaaaaa", "aaaaaaaaaa"]));
console.log(groupAnagrams(["aaaaaaaaab", "baaaaaaaaa"]));
console.log(groupAnagrams(["listen", "silent", "enlist", "inlets"]));
console.log(groupAnagrams(["rat", "car", "tar", "art"]));
