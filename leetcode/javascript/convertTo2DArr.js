// Leetcode 2022

/*
You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original.

The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.
*/

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    let arr2D = [];
    let ctr = 0;
    if (m * n != original.length) {
        return [];
    }
    for (let i = 0; i < m; i++) {
        arr2D.push([]);
        for (let j = 0; j < n; j++) {
            arr2D[i].push(original[ctr]);
            ctr++;
        }
    }
    return arr2D
};
