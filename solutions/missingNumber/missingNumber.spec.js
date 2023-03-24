const missingNumber = require('./missingNumber');

describe('Missing Number', () => {
	it('returns the missing number when it\'s in the middle of the array', () => {
		expect(missingNumber([0, 1, 3])).toBe(2);
	});

	it('returns the missing number when it\'s at the beginning of the array', () => {
		expect(missingNumber([1, 2, 3])).toBe(0);
	});

	it('returns the missing number when it\'s at the end of the array', () => {
		expect(missingNumber([0, 1, 2])).toBe(3);
	});

	it('returns 0 if the input array is empty', () => {
		expect(missingNumber([])).toBe(0);
	});

	it('returns the missing number when it\'s the only number missing in the array', () => {
		expect(missingNumber([0, 2, 3])).toBe(1);
	});
});
