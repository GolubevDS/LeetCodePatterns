const NumArray = require('.');

describe('Range Sum Query - Immutable', () => {
	describe('numArray = new NumArray([-2, 0, 3, -5, 2, -1])', () => {
		const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

		it('1. Input: numArray.sumRange(0, 2)', () => {
			const result = numArray.sumRange(0, 2);
			const expected = 1;
			expect(result).toStrictEqual(expected);
		});

		it('2. Input: numArray.sumRange(2, 5)', () => {
			const result = numArray.sumRange(2, 5);
			const expected = -1;
			expect(result).toStrictEqual(expected);
		});

		it('3. Input: numArray.sumRange(0, 5)', () => {
			const result = numArray.sumRange(0, 5);
			const expected = -3;
			expect(result).toStrictEqual(expected);
		});
	});
});
