const backspaceCompare = require('./backspaceCompare');

describe('Backspace String Compare', () => {
	it('returns true for identical strings', () => {
		const s = 'abc#d';
		const t = 'abc#d';
		expect(backspaceCompare(s, t)).toBe(true);
	});

	it('returns false for different strings', () => {
		const s = 'abc#d';
		const t = 'abc##d';
		expect(backspaceCompare(s, t)).toBe(false);
	});

	it('handles empty string inputs', () => {
		const s = '';
		const t = '';
		expect(backspaceCompare(s, t)).toBe(true);
	});

	it('handles inputs with only backspaces', () => {
		const s = '##';
		const t = '###';
		expect(backspaceCompare(s, t)).toBe(true);
	});

	it('handles inputs with only characters', () => {
		const s = 'abcd';
		const t = 'abcd';
		expect(backspaceCompare(s, t)).toBe(true);
	});

	it('handles inputs with mixed characters and backspaces', () => {
		const s = 'a##c';
		const t = '#a#c';
		expect(backspaceCompare(s, t)).toBe(true);
	});
});
