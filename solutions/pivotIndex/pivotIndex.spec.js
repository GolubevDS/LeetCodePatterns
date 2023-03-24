const pivotIndex = require('./pivotIndex');

describe("Find Pivot Index", () => {
	it('returns the correct index when there is a pivot', () => {
		const nums = [1, 7, 3, 6, 5, 6];
		expect(pivotIndex(nums)).toBe(3);
	});

	it('returns -1 when there is no pivot', () => {
		const nums = [1, 2, 3];
		expect(pivotIndex(nums)).toBe(-1);
	});

	it('returns 0 when the input array has only one element', () => {
		const nums = [5];
		expect(pivotIndex(nums)).toBe(0);
	});
});
