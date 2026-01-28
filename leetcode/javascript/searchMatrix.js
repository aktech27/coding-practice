// Leetcode 74

/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length, n = matrix[0].length;
  let L = 0, R = m * n - 1;
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    let r = Math.floor(mid / n), c = mid % n;
    if (matrix[r][c] == target) {
      return true;
    } else if (target < matrix[r][c]) {
      R = mid - 1;
    } else {
      L = mid + 1;
    }
  }
  return false;
};

console.log(searchMatrix([[1]], 1));
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));
console.log(searchMatrix([[1, 2, 3, 5, 7], [10, 11, 12, 16, 20], [23, 30, 31, 34, 60]], 111));