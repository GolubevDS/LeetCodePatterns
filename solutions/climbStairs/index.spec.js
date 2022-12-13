const climbStairs = require('./index');

describe('Climbing Stairs', () => {
	it('1. Input: n = 1', () => {
		const result = climbStairs(1);
		const expected = 1;
		expect(result).toStrictEqual(expected);
	});

	it('2. Input: n = 4', () => {
		const result = climbStairs(4);
		const expected = 5;
		expect(result).toStrictEqual(expected);
	});

	it('3. Input: n = 45', () => {
		const result = climbStairs(45);
		const expected = 1836311903;
		expect(result).toStrictEqual(expected);
	});
});