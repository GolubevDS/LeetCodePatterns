const findDisappearedNumbers = require('./findDisappearedNumbers');

describe('Find All Numbers Disappeared in an Array', () => {
	it('returns an empty array for an empty input array', () => {
		expect(findDisappearedNumbers([])).toEqual([]);
	});

	it('returns an array of missing numbers in the input array', () => {
		expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
		expect(findDisappearedNumbers([1, 1, 2, 2])).toEqual([3, 4]);
		expect(findDisappearedNumbers([1, 2, 3, 4, 5, 6])).toEqual([]);
		expect(findDisappearedNumbers([5, 4, 3, 2, 1])).toEqual([]);
	});

	it('returns an array of missing numbers when given a single number array', () => {
		expect(findDisappearedNumbers([1])).toEqual([]);
		expect(findDisappearedNumbers([2])).toEqual([1]);
		expect(findDisappearedNumbers([100])).toEqual([1]);
	});

	it('returns an array of missing numbers when given an array with duplicate numbers', () => {
		expect(findDisappearedNumbers([1, 1, 1, 2, 2, 2, 3, 3, 3])).toEqual([4, 5, 6, 7, 8, 9]);
		expect(findDisappearedNumbers([1, 2, 2, 3, 3, 3, 4, 4, 4])).toEqual([5, 6, 7, 8, 9]);
	});
});
