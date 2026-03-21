/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function (grid, x, y, k) {
  console.log(grid);
  let i = 1;
  for (let r = x; r < x + Math.floor(k / 2); r++) {
    for (let c = y; c < y + k; c++) {
      console.log(`${grid[r][c]} ==> ${grid[r + (k - i)][c]}`);
      [grid[r][c], grid[r + (k - i)][c]] = [grid[r + (k - i)][c], grid[r][c]];
    }
    i += 2;
  }
  return grid;
};

console.log(reverseSubmatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 1, 0, 3));
console.log(reverseSubmatrix([[3, 4, 2, 3], [2, 3, 4, 2]], 0, 2, 2));
console.log(reverseSubmatrix([[14, 3, 18, 16], [2, 14, 11, 20], [19, 19, 4, 15], [11, 15, 18, 6]], 0, 0, 4));
console.log(reverseSubmatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]], 0, 0, 5));


