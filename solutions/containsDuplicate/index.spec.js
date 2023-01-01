const containsDuplicate = require('.');

describe('Contains Duplicate', () => {
	it('1. Input: nums = [1,2,3,1]', () => {
		const result = containsDuplicate([1, 2, 3, 1]);
		const expected = true;
		expect(result).toStrictEqual(expected);
	});

	it('2. Input: nums = [1,2,3,4]', () => {
		const result = containsDuplicate([1, 2, 3, 4]);
		const expected = false;
		expect(result).toStrictEqual(expected);
	});

	it('3. Input: nums = [1,1,1,3,3,4,3,2,4,2]', () => {
		const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
		const expected = true;
		expect(result).toStrictEqual(expected);
	});
});
