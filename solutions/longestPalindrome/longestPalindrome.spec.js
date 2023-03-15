const longestPalindrome = require('./longestPalindrome');

describe('Longest Palindrome', () => {
	it('longestPalindrome returns correct result for empty string', () => {
		expect(longestPalindrome('')).toBe(0);
	});

	it('longestPalindrome returns correct result for string with no palindrome', () => {
		expect(longestPalindrome('abc')).toBe(1);
	});

	it('longestPalindrome returns correct result for string with one palindrome', () => {
		expect(longestPalindrome('racecar')).toBe(7);
	});

	it('longestPalindrome returns correct result for string with multiple palindromes', () => {
		expect(longestPalindrome('abccccdd')).toBe(7);
	});

	it('longestPalindrome returns correct result for string with odd palindrome', () => {
		expect(longestPalindrome('abbcccddddeeeee')).toBe(13);
	});

	it('longestPalindrome returns correct result for string with even palindrome', () => {
		expect(longestPalindrome('abcdedcba')).toBe(9);
	});
});
