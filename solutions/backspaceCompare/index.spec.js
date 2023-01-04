const backspaceCompare = require('.');

describe('Backspace String Compare', () => {
	it('Input: s = "ab#c", t = "ad#c"', () => {
		const result = backspaceCompare('ab#c', 'ad#c');
		const expected = true;
		expect(result).toStrictEqual(expected);
	});

	it('Input: s = "ab##", t = "c#d#"', () => {
		const result = backspaceCompare('ab##', 'c#d#');
		const expected = true;
		expect(result).toStrictEqual(expected);
	});

	it('Input: s = "a#c", t = "b"', () => {
		const result = backspaceCompare('a#c', 'b');
		const expected = false;
		expect(result).toStrictEqual(expected);
	});
});
