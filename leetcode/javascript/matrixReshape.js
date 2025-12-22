// Leetcode 566

/*
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]

Example 2:
Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
*/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let row = mat.length;
  let col = mat[0].length;

  if (row * col != r * c) {
    return mat;
  }

  let ans = [];
  let x = 0, y = 0;
  for (let i = 0; i < r; i++) {
    let row = [];
    for (let j = 0; j < c; j++) {
      row.push(mat[x][y]);
      y++;
      if (y >= col) {
        y = 0;
        x++;
      }
    }
    ans.push(row);
  }
  return ans;
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));
console.log(matrixReshape([[1, 2], [3, 4]], 4, 1));
console.log(matrixReshape([[1, 2, 3], [4, 5, 6]], 3, 2));
console.log(matrixReshape([[1, 2, 3], [4, 5, 6]], 1, 6));
console.log(matrixReshape([[1]], 1, 1));
console.log(matrixReshape([[1]], 2, 2));
