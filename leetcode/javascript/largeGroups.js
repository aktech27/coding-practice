// Leetcode 830

/*
In a string s of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

A group is considered large if it has 3 or more characters.

Return the intervals of every large group sorted in increasing order by start index.

*/

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let groups = [];
  let ptr1 = 0, ptr2 = 1;
  while (ptr2 < s.length) {
    if (s[ptr1] == s[ptr2]) {
      ptr2++;
    } else {
      // console.log(ptr1, ptr2);
      if ((ptr2 - ptr1) >= 3) {
        groups.push([ptr1, ptr2 - 1]);
      }
      ptr1 = ptr2;
      ptr2 = ptr1 + 1;
    }
  }
  if ((ptr2 - ptr1) >= 3) {
    groups.push([ptr1, ptr2 - 1]);
  }
  return groups;
};

console.log(largeGroupPositions("abbxxxxzzy"));
console.log(largeGroupPositions("abc"));
console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
console.log(largeGroupPositions("baaaa"));
console.log(largeGroupPositions("aaaaa"));
