const fizzBuzz = require('./fizzBuzz');

describe('Fizz Buzz', () => {
	it('returns an array of the correct length', () => {
		expect(fizzBuzz(15)).toHaveLength(15);
		expect(fizzBuzz(0)).toHaveLength(0);
	});

	it('returns the correct output for each number', () => {
		expect(fizzBuzz(15)).toEqual([
			'1',
			'2',
			'Fizz',
			'4',
			'Buzz',
			'Fizz',
			'7',
			'8',
			'Fizz',
			'Buzz',
			'11',
			'Fizz',
			'13',
			'14',
			'FizzBuzz',
		]);
	});

	it('returns an empty array when given 0 as input', () => {
		expect(fizzBuzz(0)).toEqual([]);
	});
});
