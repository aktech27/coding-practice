// Leetcode 54

/*
Given an m x n matrix, return all elements of the matrix in spiral order.
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  let i = 0;
  let row = 0;
  let col = 0;
  let topRow = 1;
  let endRow = rows - 1;
  let endCol = cols - 1;
  let topCol = 0;
  while (i < (rows * cols)) {
    while ((col <= endCol) && (i < (rows * cols))) {
      console.log(row, col);
      res.push(matrix[row][col]);
      if (col == endCol) {
        endCol--;
        row++;
      } else {
        col++;
      }
      i++;
    }
    while ((row <= endRow) && (i < (rows * cols))) {
      console.log(row, col);
      res.push(matrix[row][col]);
      if (row == endRow) {
        endRow--;
        col--;
      } else {
        row++;
      }
      i++;
    }
    while ((col >= topCol) && (i < (rows * cols))) {
      console.log(row, col);
      res.push(matrix[row][col]);
      if (col == topCol) {
        topCol++;
        row--;
      } else {
        col--;
      }
      i++;
    }
    while ((row >= topRow) && (i < (rows * cols))) {
      console.log(row, col);
      res.push(matrix[row][col]);
      if (row == topRow) {
        topRow++;
        col++;
      } else {
        row--;
      }
      i++;
    }
  }
  return res;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
// console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
// console.log(spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]));