const twoSum = require('./twoSum');

describe('Two Sum', () => {
	it('returns the correct indices for a valid input', () => {
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
		expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
		expect(twoSum([3, 3], 6)).toEqual([0, 1]);
	});

	it('returns undefined for an invalid input', () => {
		expect(twoSum([2, 7, 11, 15], 10)).toBeUndefined();
		expect(twoSum([], 5)).toBeUndefined();
		expect(twoSum([1, 2, 3], 7)).toBeUndefined();
	});
});
