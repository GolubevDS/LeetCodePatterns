const ListNode = require('../../helpers/listNode');
const middleNode = require('./middleNode');

describe('Middle of the Linked List', () => {
	it('returns the middle node for a list with an odd number of nodes', () => {
		const head = new ListNode(1);
		head.next = new ListNode(2);
		head.next.next = new ListNode(3);
		head.next.next.next = new ListNode(4);
		head.next.next.next.next = new ListNode(5);

		const result = middleNode(head);

		expect(result.val).toBe(3);
		expect(result.next.val).toBe(4);
	});

	it('returns the middle node for a list with an even number of nodes', () => {
		const head = new ListNode(1);
		head.next = new ListNode(2);
		head.next.next = new ListNode(3);
		head.next.next.next = new ListNode(4);

		const result = middleNode(head);

		expect(result.val).toBe(3);
		expect(result.next.val).toBe(4);
		expect(result.next.next).toBeNull();
	});

	it('returns the only node when the list has only one node', () => {
		const head = new ListNode(1);

		const result = middleNode(head);

		expect(result.val).toBe(1);
		expect(result.next).toBeNull();
	});
});
