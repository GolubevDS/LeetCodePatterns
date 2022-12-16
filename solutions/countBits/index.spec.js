const countBits = require('./index');

describe('Counting Bits', () => {
	it('1. Input: n = 2', () => {
		const result = countBits(2);
		const expected = [0, 1, 1];
		expect(result).toStrictEqual(expected);
	});

	it('2. Input: n = 5', () => {
		const result = countBits(5);
		const expected = [0, 1, 1, 2, 1, 2];
		expect(result).toStrictEqual(expected);
	});

	it('3. Input: n = 16', () => {
		const result = countBits(16);
		const expected = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1];
		expect(result).toStrictEqual(expected);
	});
});