const majorityElement = require('.');

describe('Majority Element', () => {
	it('Input: nums = [3,2,3]', () => {
		const result = majorityElement([3, 2, 3]);
		const expected = 3;
		expect(result).toStrictEqual(expected);
	});

	it('Input: nums = [2,2,1,1,1,2,2]', () => {
		const result = majorityElement([2, 2, 1, 1, 1, 2, 2]);
		const expected = 2;
		expect(result).toStrictEqual(expected);
	});
});
