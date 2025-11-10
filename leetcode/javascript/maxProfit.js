// Leetcode 121

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitBrute = function (prices) {
	let max_profit = 0;
	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			if (prices[j] - prices[i] > max_profit) {
				max_profit = prices[j] - prices[i];
			}
		}
	}
	return max_profit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let max_profit = 0;
	let min_price = prices[0];
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] - min_price > max_profit) {
			max_profit = prices[i] - min_price;
		}
		if (prices[i] < min_price) {
			min_price = prices[i]
		}
	}
	return max_profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 7, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([1, 2]));
console.log(maxProfit([5, 5, 5, 5, 5, 5]));
console.log(maxProfit([5]));  