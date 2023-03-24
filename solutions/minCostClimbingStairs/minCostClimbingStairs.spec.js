const minCostClimbingStairs = require('./minCostClimbingStairs');

describe('Min Cost Climbing Stairs', () => {
	it('returns the correct minimum cost to climb the stairs', () => {
		expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
		expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
		expect(minCostClimbingStairs([10, 2, 5, 4, 1, 7])).toBe(7);
		expect(minCostClimbingStairs([5, 10])).toBe(5);
	});

	it('returns 0 if the cost array has only one element', () => {
		expect(minCostClimbingStairs([10])).toBe(0);
	});

	it('returns the minimum of the first two costs if the cost array has only two elements', () => {
		expect(minCostClimbingStairs([10, 20])).toBe(10);
		expect(minCostClimbingStairs([20, 10])).toBe(10);
	});
});
