// Leetcode 1572

/*
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (i == j || i + j + 1 == mat.length) {
        sum += mat[i][j];
      }
    }
  }
  return sum;
};

console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(diagonalSum([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]));
console.log(diagonalSum([[5]]));
console.log(diagonalSum([[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [4, 5, 6, 7, 8], [7, 8, 9, 10, 11]]));