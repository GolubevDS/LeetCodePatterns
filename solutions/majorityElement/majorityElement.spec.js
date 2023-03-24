const majorityElement = require('./majorityElement');

describe('Majority Element', () => {
	it('returns the correct majority element for a valid input', () => {
		const input = [3, 2, 3];
		const expectedOutput = 3;
		expect(majorityElement(input)).toEqual(expectedOutput);
	});

	it('returns undefined for an empty input', () => {
		const input = [];
		expect(majorityElement(input)).toBeUndefined();
	});

	it('returns undefined for an input without a majority element', () => {
		const input = [1, 2, 3, 4, 5, 6];
		expect(majorityElement(input)).toBeUndefined();
	});
});
