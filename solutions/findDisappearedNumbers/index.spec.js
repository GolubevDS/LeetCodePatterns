const findDisappearedNumbers = require('./index');

describe('Find All Numbers Disappeared in an Array', () => {
	it('1. Input: nums = [4,3,2,7,8,2,3,1]', () => {
		const result = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
		const expected = [5, 6];
		expect(result).toStrictEqual(expected);
	});

	it('2. Input: nums = [1,1]', () => {
		const result = findDisappearedNumbers([1, 1]);
		const expected = [2];
		expect(result).toStrictEqual(expected);
	});
});