const ListNode = require('../../helpers/listNode');
const removeElements = require('./removeElements');

describe('Remove Linked List Elements', () => {
	it('removes all occurrences of the given value from the linked list', () => {
		// Input: 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6, val = 6
		// Output: 1 -> 2 -> 3 -> 4 -> 5
		const head = new ListNode(1,
			new ListNode(2,
				new ListNode(6,
					new ListNode(3,
						new ListNode(4,
							new ListNode(5,
								new ListNode(6),
							),
						),
					),
				),
			),
		);
		const val = 6;
		const expected = new ListNode(1,
			new ListNode(2,
				new ListNode(3,
					new ListNode(4,
						new ListNode(5),
					),
				),
			),
		);

		expect(removeElements(head, val)).toEqual(expected);
	});

	it('removes all occurrences of the given value when it is the only element in the linked list', () => {
		const head = new ListNode(1);
		const val = 1;
		const expected = null;

		expect(removeElements(head, val)).toEqual(expected);
	});

	it('returns the original linked list if no elements match the given value', () => {
		const head = new ListNode(1,
			new ListNode(2,
				new ListNode(3),
			),
		);
		const val = 4;
		const expected = new ListNode(1,
			new ListNode(2,
				new ListNode(3),
			),
		);

		expect(removeElements(head, val)).toEqual(expected);
	});

	it('returns null for an empty linked list', () => {
		const head = null;
		const val = 1;
		const expected = null;

		expect(removeElements(head, val)).toEqual(expected);
	});
});
