const canConstruct = require('./canConstruct');

describe('Ransom Note', () => {
	it('returns true if ransomNote can be constructed from magazine', () => {
		expect(canConstruct('a', 'a')).toBe(true);
		expect(canConstruct('aa', 'aab')).toBe(true);
		expect(canConstruct('aab', 'baa')).toBe(true);
		expect(canConstruct('ab', 'baa')).toBe(true);
		expect(canConstruct('abc', 'abdefc')).toBe(true);
		expect(canConstruct('abcde', 'aabbccddeeffg')).toBe(true);
	});

	it('returns false if ransomNote cannot be constructed from magazine', () => {
		expect(canConstruct('b', 'a')).toBe(false);
		expect(canConstruct('aa', 'ab')).toBe(false);
		expect(canConstruct('abccdef', 'abdeffc')).toBe(false);
		expect(canConstruct('aabbccddeeffg', 'abcdef')).toBe(false);
	});

	it('returns true if ransomNote is an empty string', () => {
		expect(canConstruct('', 'a')).toBe(true);
		expect(canConstruct('', '')).toBe(true);
	});

	it('returns false if ransomNote is longer than magazine', () => {
		expect(canConstruct('abc', 'ab')).toBe(false);
	});
});
