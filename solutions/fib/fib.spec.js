const fib = require('./fib.js');

describe('Fibonacci Number', () => {
	it('returns the correct Fibonacci number for small inputs', () => {
		expect(fib(0)).toBe(0);
		expect(fib(1)).toBe(1);
		expect(fib(2)).toBe(1);
		expect(fib(3)).toBe(2);
		expect(fib(4)).toBe(3);
		expect(fib(5)).toBe(5);
	});

	it('returns the correct Fibonacci number for larger inputs', () => {
		expect(fib(10)).toBe(55);
		expect(fib(20)).toBe(6765);
		expect(fib(30)).toBe(832040);
	});
});
