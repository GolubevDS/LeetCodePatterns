const runningSum = require('.');

describe('Running Sum of 1d Array', () => {
	it('should return an empty array if given an empty array', () => {
		const result = runningSum([]);
		expect(result).toEqual([]);
	});

	it('should return an array with the same length as the input array', () => {
		const input = [1, 2, 3, 4, 5];
		const result = runningSum(input);
		expect(result.length).toEqual(input.length);
	});

	it('should correctly calculate the running sum of the input array', () => {
		const input = [1, 2, 3, 4, 5];
		const result = runningSum(input);
		expect(result).toEqual([1, 3, 6, 10, 15]);
	});

	it('should work with arrays containing negative numbers', () => {
		const input = [-1, 2, -3, 4, -5];
		const result = runningSum(input);
		expect(result).toEqual([-1, 1, -2, 2, -3]);
	});
});
