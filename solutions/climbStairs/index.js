const cache = [];

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
	if (n <= 3) {
		return n;
	}

	if (!cache[n]) {
		cache[n] = climbStairs(n - 2) + climbStairs(n - 1);
	}

	return cache[n];
}

module.exports = climbStairs;
