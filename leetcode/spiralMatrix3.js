// Leetcode 885

/*
You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.

You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.

Return an array of coordinates representing the positions of the grid in the order you visited them.
*/

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  const res = [];
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

  let row = rStart, col = cStart;

  const totalMoves = rows * cols;
  let move = 1;

  let rightPtr = (cStart + 1 < cols) ? cStart + 1 : cStart;
  let bottomPtr = (rStart + 1 < rows) ? rStart + 1 : rStart;
  let leftPtr = (cStart - 1 >= 0) ? cStart - 1 : cStart;
  let topPtr = (rStart - 1 >= 0) ? rStart - 1 : rStart;

  // console.log('ptrs-->', rightPtr, bottomPtr, leftPtr, topPtr);
  while (move <= totalMoves) {
    // Go Right
    while (col <= rightPtr) {
      // console.log(`Came Right to [${row},${col}]`);
      if (matrix[row][col] == 0) {
        // console.log(`Push [${row},${col}]`);
        res.push([row, col]);
        // console.log(matrix[row][col]);
        matrix[row][col] = move;
        move++;
      }
      col++;
    }
    rightPtr = (rightPtr + 1 < cols) ? rightPtr + 1 : rightPtr;
    col--;
    row++;

    // Go Down
    while (row <= bottomPtr) {
      // console.log(`Came Down to [${row},${col}]`);
      if (matrix[row][col] == 0) {
        // console.log(`Push [${row},${col}]`);
        res.push([row, col]);
        matrix[row][col] = move;
        move++;
      }
      row++;
    }
    bottomPtr = (bottomPtr + 1 < rows) ? bottomPtr + 1 : bottomPtr;
    row--;
    col--;

    // Go Left
    while (col >= leftPtr) {
      // console.log(`Came Left to [${row},${col}]`);
      if (matrix[row][col] == 0) {
        // console.log(`Push [${row},${col}]`);
        res.push([row, col]);
        matrix[row][col] = move;
        move++;
      }
      col--;
    }
    leftPtr = (leftPtr - 1 >= 0) ? leftPtr - 1 : leftPtr;
    col++;
    row--;

    // Go Up
    while (row >= topPtr) {
      // console.log(`Came top to [${row},${col}]`);
      if (matrix[row][col] == 0) {
        // console.log(`Push [${row},${col}]`);
        res.push([row, col]);
        matrix[row][col] = move;
        move++;
      }
      row--;
    }
    topPtr = (topPtr - 1 >= 0) ? topPtr - 1 : topPtr;
    row++;
    col++;
  }
  return res;
};

console.log(spiralMatrixIII(1, 4, 0, 0));
console.log(spiralMatrixIII(5, 6, 1, 4));
console.log(spiralMatrixIII(4, 4, 0, 0));
console.log(spiralMatrixIII(4, 4, 1, 1));
