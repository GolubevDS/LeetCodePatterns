const containsDuplicate = require('./index');

test('1 appeared two times in the input array', () => {
	expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test('input array does not contain any duplicate number', () => {
	expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});