// Leetcode 59

/*
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let res = Array.from(Array(n), () => Array(n).fill(0));
    let i = 0;
    let row = 0;
    let col = 0;
    let topRow = 1;
    let endRow = n - 1;
    let endCol = n - 1;
    let topCol = 0;
    while (i < (n * n)) {
        while ((col <= endCol) && (i < (n * n))) {
            res[row][col] = i + 1;
            if (col == endCol) {
                endCol--;
                row++;
            } else {
                col++;
            }
            i++;
        }
        while ((row <= endRow) && (i < (n * n))) {
            res[row][col] = i + 1;
            if (row == endRow) {
                endRow--;
                col--;
            } else {
                row++;
            }
            i++;
        }
        while ((col >= topCol) && (i < (n * n))) {
            res[row][col] = i + 1;
            if (col == topCol) {
                topCol++;
                row--;
            } else {
                col--;
            }
            i++;
        }
        while ((row >= topRow) && (i < (n * n))) {
            res[row][col] = i + 1;
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
