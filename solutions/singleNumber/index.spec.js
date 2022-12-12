const singleNumber = require('./index');

describe('Single Number', () => {
	it('1. Input: nums = [2,2,1]', () => {
		const result = singleNumber([2, 2, 1]);
		const expected = 1;
		expect(result).toStrictEqual(expected);
	});

	it('2. Input: nums = [4,1,2,1,2]', () => {
		const result = singleNumber([4, 1, 2, 1, 2]);
		const expected = 4;
		expect(result).toStrictEqual(expected);
	});

	it('3. Input: nums = [1]', () => {
		const result = singleNumber([1]);
		const expected = 1;
		expect(result).toStrictEqual(expected);
	});
});