const ListNode = require('../../helpers/listNode');
const reverseList = require('./reverseList');

describe('Reverse Linked List', () => {
	it('returns null for empty input list', () => {
		expect(reverseList(null)).toBeNull();
	});

	it('reverses a list with one node', () => {
		const head = new ListNode(1);
		expect(reverseList(head)).toEqual(head);
	});

	it('reverses a list with multiple nodes', () => {
		const head = new ListNode(1, new ListNode(2, new ListNode(3)));
		const reversed = new ListNode(3, new ListNode(2, new ListNode(1)));
		expect(reverseList(head)).toEqual(reversed);
	});
});
