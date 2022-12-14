/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
	let min = prices[0],
	    max = 0;

	for (let i = 1; i < prices.length; i++) {
		min = Math.min(min, prices[i]);
		max = Math.max(max, prices[i] - min);
	}

	return max;
}

module.exports = maxProfit;
