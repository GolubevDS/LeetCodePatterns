const isSubsequence = require('./isSubsequence');

describe('Is Subsequence', () => {
	it('should return true when s is an empty string', () => {
		const result = isSubsequence('', 'hello world');
		expect(result).toBe(true);
	});

	it('should return true when s is a substring of t', () => {
		const result = isSubsequence('abc', 'aabbcc');
		expect(result).toBe(true);
	});

	it('should return false when s is not a substring of t', () => {
		const result = isSubsequence('xyz', 'hello world');
		expect(result).toBe(false);
	});

	it('should return true when s is equal to t', () => {
		const result = isSubsequence('hello', 'hello');
		expect(result).toBe(true);
	});

	it('should return true when s is a single character', () => {
		const result = isSubsequence('o', 'hello world');
		expect(result).toBe(true);
	});

	it('should handle edge cases when s is longer than t', () => {
		const result = isSubsequence('hello world', 'hello');
		expect(result).toBe(false);
	});
});
