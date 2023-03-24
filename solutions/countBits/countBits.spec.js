const countBits = require('./countBits');

describe('Counting Bits', () => {
	it('returns an array with the correct length', () => {
		expect(countBits(5).length).toBe(6);
		expect(countBits(0).length).toBe(1);
	});

	it('returns the correct result for input 2', () => {
		expect(countBits(2)).toEqual([0, 1, 1]);
	});

	it('returns the correct result for input 5', () => {
		expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
	});

	it('returns the correct result for input 10', () => {
		expect(countBits(10)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
	});
});
