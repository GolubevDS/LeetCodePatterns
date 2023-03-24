/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
	if (cost.length === 1) return 0;
	if (cost.length === 2) return Math.min(cost[0], cost[1]);

	let first = cost[0], second = cost[1];

	for (let i = 2; i < cost.length; i++) {
		const current = cost[i] + Math.min(first, second);

		first = second;
		second = current;
	}

	return Math.min(first, second);
}

module.exports = minCostClimbingStairs;
