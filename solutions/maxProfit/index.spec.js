const maxProfit = require('./index');

describe('Best Time to Buy and Sell Stock', () => {
	it('1. Input: prices = [7,1,5,3,6,4]', () => {
		const result = maxProfit([7, 1, 5, 3, 6, 4]);
		const expected = 5;
		expect(result).toStrictEqual(expected);
	});

	it('2. Input: prices = [7,6,4,3,1]', () => {
		const result = maxProfit([7, 6, 4, 3, 1]);
		const expected = 0;
		expect(result).toStrictEqual(expected);
	});

	it('3. Input: prices = [2,9,1,5]', () => {
		const result = maxProfit([2, 9, 1, 5]);
		const expected = 7;
		expect(result).toStrictEqual(expected);
	});
});