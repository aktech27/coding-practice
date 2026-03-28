/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
    if ((numOnes + numZeros) >= k) {
        return Math.min(numOnes, k);
    }
    k = k - (numOnes + numZeros);
    return numOnes - k;
};