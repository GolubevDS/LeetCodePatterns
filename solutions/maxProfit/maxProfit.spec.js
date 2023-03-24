const maxProfit = require('./maxProfit');

describe('Best Time to Buy and Sell Stock', () => {
	it('should return the maximum profit', () => {
		expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
		expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
		expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
		expect(maxProfit([2, 1, 2, 0, 1])).toBe(1);
	});

	it('should return 0 if the array is empty or has only one element', () => {
		expect(maxProfit([])).toBe(0);
		expect(maxProfit([1])).toBe(0);
	});
});
