const numberOfSteps = require('./numberOfSteps');

describe('Number of Steps to Reduce a Number to Zero', () => {
	it('returns the correct number of steps for positive even numbers', () => {
		expect(numberOfSteps(4)).toBe(3);
		expect(numberOfSteps(8)).toBe(4);
		expect(numberOfSteps(12)).toBe(5);
		expect(numberOfSteps(100)).toBe(9);
	});

	it('returns the correct number of steps for positive odd numbers', () => {
		expect(numberOfSteps(3)).toBe(3);
		expect(numberOfSteps(7)).toBe(5);
		expect(numberOfSteps(11)).toBe(6);
		expect(numberOfSteps(101)).toBe(10);
	});

	it('returns 0 for 0 input', () => {
		expect(numberOfSteps(0)).toBe(0);
	});
});
