const climbStairs = require('./climbStairs');

describe('Climbing Stairs', () => {
	it('climbStairs returns the correct result', () => {
		expect(climbStairs(1)).toEqual(1);
		expect(climbStairs(2)).toEqual(2);
		expect(climbStairs(3)).toEqual(3);
		expect(climbStairs(4)).toEqual(5);
		expect(climbStairs(5)).toEqual(8);
		expect(climbStairs(6)).toEqual(13);
	});

	it('returns the correct result for large values of n', () => {
		expect(climbStairs(45)).toBe(1836311903);
	});
});
