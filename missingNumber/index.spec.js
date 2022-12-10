const missingNumber = require('./index');

describe('Missing Number', () => {
	it('1. Input: nums = [3,0,1]', () => {
		const result = missingNumber([3, 0, 1]);
		const expected = 2;
		expect(result).toStrictEqual(expected);
	});

	it('2. Input: nums = [0,1]', () => {
		const result = missingNumber([0, 1]);
		const expected = 2;
		expect(result).toStrictEqual(expected);
	});

	it('3. Input: nums = [9,6,4,2,3,5,7,0,1]', () => {
		const result = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
		const expected = 8;
		expect(result).toStrictEqual(expected);
	});
});