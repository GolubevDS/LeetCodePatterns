const ListNode = require('../../helpers/listNode');
const hasCycle = require('./hasCycle');

describe('Linked List Cycle', () => {
	it('returns false for an empty list', () => {
		expect(hasCycle(null)).toBe(false);
	});

	it('returns false for a list with only one node', () => {
		const head = new ListNode(1);
		expect(hasCycle(head)).toBe(false);
	});

	it('returns false for a list with no cycle', () => {
		const head = new ListNode(1, new ListNode(2, new ListNode(3)));
		expect(hasCycle(head)).toBe(false);
	});

	it('returns true for a list with a cycle', () => {
		const head = new ListNode(1);
		head.next = new ListNode(2);
		head.next.next = new ListNode(3);
		head.next.next.next = head.next;
		expect(hasCycle(head)).toBe(true);
	});
});
