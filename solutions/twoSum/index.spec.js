const twoSum = require('.');

describe('Two Sum', () => {
	it('Input: nums = [2,7,11,15], target = 9', () => {
		const result = twoSum([2, 7, 11, 15], 9);
		const expected = [0, 1];
		expect(result).toStrictEqual(expected);
	});

	it('Input: nums = [3,2,4], target = 6', () => {
		const result = twoSum([3, 2, 4], 6);
		const expected = [1, 2];
		expect(result).toStrictEqual(expected);
	});

	it('Input: nums = [3,3], target = 6', () => {
		const result = twoSum([3, 3], 6);
		const expected = [0, 1];
		expect(result).toStrictEqual(expected);
	});
});
