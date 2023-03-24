const NumArray = require('./sumRange');

describe('Range Sum Query - Immutable', () => {
	let numArray;

	beforeEach(() => {
		numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
	});

	it('sumRange returns the correct sum for a valid input', () => {
		expect(numArray.sumRange(0, 2)).toBe(1);
		expect(numArray.sumRange(2, 5)).toBe(-1);
		expect(numArray.sumRange(0, 5)).toBe(-3);
	});

	it('sumRange returns 0 for an empty range', () => {
		expect(numArray.sumRange(0, -1)).toBe(0);
		expect(numArray.sumRange(5, 2)).toBe(0);
	});
});
