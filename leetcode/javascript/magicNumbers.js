// Leetcode 840

/*
A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.

Given a row x col grid of integers, how many 3 x 3 contiguous magic square subgrids are there?

Note: while a magic square can only contain numbers from 1 to 9, grid may contain numbers up to 15.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  const checkConstraints = (matrix) => {
    // console.log(matrix);
    const hashMap = {};
    let lDiag = 0;
    let rDiag = 0;
    for (let i = 0; i < 3; i++) {
      // All row sum to be 15 - check
      let rowSum = matrix[i].reduce((a, c) => (a + c), 0);
      if (rowSum != 15) {
        return false;
      }

      // All column sum to be 15 - check
      let colSum = matrix[0][i] + matrix[1][i] + matrix[2][i];
      if (colSum != 15) {
        return false;
      }

      for (let j = 0; j < 3; j++) {
        // Element is within 1 to 9 - check
        if (matrix[i][j] <= 0 || matrix[i][j] > 9) {
          return false;
        }

        // Unique element check
        if (hashMap[matrix[i][j]] !== undefined) {
          return false;
        } else {
          hashMap[matrix[i][j]] = true;
        }

        // Diagnol sum calculation
        if (i == j) {
          lDiag += matrix[i][j];
        }
        if (i + j == matrix.length - 1) {
          rDiag += matrix[i][j];
        }
      }
    }

    // Diagnol sum to be 15
    if (lDiag != 15 || rDiag != 15) {
      return false;
    }

    return true;
  };

  let count = 0;
  if (grid.length < 3 || grid[0].length < 3) {
    return count;
  }

  // Generate the 3x3 sub matrix
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[i].length - 2; j++) {
      let matrix = [];
      matrix.push([grid[i][j], grid[i][j + 1], grid[i][j + 2]]);
      matrix.push([grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2]]);
      matrix.push([grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]]);
      if (checkConstraints(matrix)) {
        count++;
      }
    }
  }
  return count;
};

// console.log(numMagicSquaresInside([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]]));
// console.log(numMagicSquaresInside([[8]]));
// console.log(numMagicSquaresInside([[10, 3, 5], [1, 6, 11], [7, 9, 2]]));
// console.log(numMagicSquaresInside([[4, 7, 8], [9, 5, 1], [2, 3, 6]]));
// console.log(numMagicSquaresInside([[5, 5, 5], [5, 5, 5], [5, 5, 5]]));
// console.log(numMagicSquaresInside([[9, 9, 5, 1, 9, 5, 5, 7, 2, 5], [9, 1, 8, 3, 4, 6, 7, 2, 8, 9], [4, 1, 1, 5, 9, 1, 5, 9, 6, 4], [5, 5, 6, 7, 2, 8, 3, 4, 0, 6], [1, 9, 1, 8, 3, 1, 4, 2, 9, 4], [2, 8, 6, 4, 2, 7, 3, 2, 7, 6], [9, 2, 5, 0, 7, 8, 2, 9, 5, 1], [2, 1, 4, 4, 7, 6, 2, 4, 3, 8], [1, 2, 5, 3, 0, 5, 10, 8, 5, 2], [6, 9, 6, 8, 8, 4, 3, 6, 0, 9]]));
console.log(numMagicSquaresInside([[9, 0, 8, 1, 6], [2, 4, 3, 5, 7], [4, 3, 4, 9, 2], [2, 4, 5, 6, 1], [9, 8, 0, 7, 8]]));