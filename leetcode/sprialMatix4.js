// Leetcode 2326

/*
You are given two integers m and n, which represent the dimensions of a matrix.

You are also given the head of a linked list of integers.

Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.

Return the generated matrix.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
    let res = Array.from(Array(m), () => Array(n).fill(-1));
    let i = 0;
    let row = 0;
    let col = 0;
    let topRow = 1;
    let endRow = m - 1;
    let endCol = n - 1;
    let topCol = 0;
    while (head.next !== null) {
        while ((col <= endCol) && (head.next !== null)) {
            res[row][col] = head.val;
            head = head.next;
            if (col == endCol) {
                endCol--;
                row++;
            } else {
                col++;
            }
            i++;
        }
        while ((row <= endRow) && (head.next !== null)) {
            res[row][col] = head.val;
            head = head.next;
            if (row == endRow) {
                endRow--;
                col--;
            } else {
                row++;
            }
            i++;
        }
        while ((col >= topCol) && (head.next !== null)) {
            res[row][col] = head.val;
            head = head.next;
            if (col == topCol) {
                topCol++;
                row--;
            } else {
                col--;
            }
            i++;
        }
        while ((row >= topRow) && (head.next !== null)) {
            res[row][col] = head.val;
            head = head.next;
            if (row == topRow) {
                topRow++;
                col++;
            } else {
                row--;
            }
            i++;
        }
    }
    res[row][col] = head.val;
    return res;
};
