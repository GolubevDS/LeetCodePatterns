const containsDuplicate = require('./containsDuplicate');

describe('Contains Duplicate', () => {
	test('should return true if array contains duplicate numbers', () => {
		expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
		expect(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9])).toBe(true);
		expect(containsDuplicate([1, 1])).toBe(true);
	});

	test('should return false if array does not contain duplicate numbers', () => {
		expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
		expect(containsDuplicate([1])).toBe(false);
		expect(containsDuplicate([])).toBe(false);
	});
});
