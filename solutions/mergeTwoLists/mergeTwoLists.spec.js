const createLinkedListFromArray = require('../../helpers/createLinkedListFromArray');
const mergeTwoLists = require('./mergeTwoLists');

describe('Merge Two Sorted Lists', () => {
	it('should return null when both input lists are empty', () => {
		const result = mergeTwoLists(null, null);
		expect(result).toBeNull();
	});

	it('should return the non-empty list when one input list is empty', () => {
		const l1 = createLinkedListFromArray([1, 2, 3]);
		const result1 = mergeTwoLists(l1, null);
		expect(result1).toEqual(l1);

		const l2 = createLinkedListFromArray([4, 5, 6]);
		const result2 = mergeTwoLists(null, l2);
		expect(result2).toEqual(l2);
	});

	it('should return the merged list when both input lists are non-empty and sorted', () => {
		const l1 = createLinkedListFromArray([1, 3, 5]);
		const l2 = createLinkedListFromArray([2, 4, 6]);
		const expected = createLinkedListFromArray([1, 2, 3, 4, 5, 6]);

		const result = mergeTwoLists(l1, l2);
		expect(result).toEqual(expected);
	});

	it('should handle edge cases where the input lists contain duplicate values', () => {
		const l1 = createLinkedListFromArray([1, 2, 2, 3, 4, 5]);
		const l2 = createLinkedListFromArray([1, 3, 4, 5, 6, 6]);
		const expected = createLinkedListFromArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]);

		const result = mergeTwoLists(l1, l2);
		expect(result).toEqual(expected);
	});

	it('should handle edge cases where the input lists have different lengths', () => {
		const l1 = createLinkedListFromArray([1, 3, 5]);
		const l2 = createLinkedListFromArray([2, 4]);
		const expected = createLinkedListFromArray([1, 2, 3, 4, 5]);

		const result = mergeTwoLists(l1, l2);
		expect(result).toEqual(expected);
	});
});
