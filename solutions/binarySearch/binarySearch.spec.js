const binarySearch = require('./binarySearch');

describe('Binary Search', () => {
	it('should return the index of the target element', () => {
		expect(binarySearch([1, 3, 5, 7, 9], 3)).toBe(1);
		expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
		expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
		expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
		expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
	});

	it('should return -1 if the target element is not found', () => {
		expect(binarySearch([1, 3, 5, 7, 9], 2)).toBe(-1);
		expect(binarySearch([1, 3, 5, 7, 9], 0)).toBe(-1);
		expect(binarySearch([1, 3, 5, 7, 9], 10)).toBe(-1);
	});

	it('should return -1 for an empty array', () => {
		expect(binarySearch([], 1)).toBe(-1);
	});
});
