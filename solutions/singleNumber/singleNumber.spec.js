const singleNumber = require('./singleNumber');

describe('Single Number', () => {
	it('returns the correct result for an array with one element', () => {
		expect(singleNumber([1])).toBe(1);
		expect(singleNumber([-2])).toBe(-2);
	});

	it('returns the correct result for an array with multiple elements', () => {
		expect(singleNumber([2, 2, 1])).toBe(1);
		expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
		expect(singleNumber([7, -3, -3, 10, 7])).toBe(10);
	});
});
