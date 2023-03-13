const isIsomorphic = require('./isIsomorphic');

describe('isIsomorphic', () => {
	it('should return true when s and t are empty strings', () => {
		const result = isIsomorphic('', '');
		expect(result).toBe(true);
	});

	it('should return true when s and t are isomorphic', () => {
		const result = isIsomorphic('egg', 'add');
		expect(result).toBe(true);
	});

	it('should return false when s and t are not isomorphic', () => {
		const result = isIsomorphic('foo', 'bar');
		expect(result).toBe(false);
	});

	it('should handle edge cases when s and t have different lengths', () => {
		const result = isIsomorphic('paper', 'title');
		expect(result).toBe(true);
	});

	it('should handle edge cases when s and t have the same letters but different order', () => {
		const result = isIsomorphic('abcdef', 'ghijkl');
		expect(result).toBe(true);
	});
});
