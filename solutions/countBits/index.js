/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
	const memo = new Array(n + 1).fill(0);

	for (let i = 1; i < n + 1; i++) {
		memo[i] = memo[i >> 1] + i % 2;
	}

	return memo;
}

module.exports = countBits;