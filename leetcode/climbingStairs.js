//Leetcode 70

/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

const hashMap = {
    '1': 1,
    '2': 2,
}
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 1) {
        return 1
    }
    if (n == 2) {
        return 2
    }
    if (hashMap[n]) {
        return hashMap[n]
    } else {
        hashMap[n] = climbStairs(n - 1) + climbStairs(n - 2)
        return hashMap[n]
    }
};
