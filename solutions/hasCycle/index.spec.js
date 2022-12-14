const ListNode = require('../../helpers/listNode');
const hasCycle = require('.');

describe('Linked List Cycle', () => {
	it('1. Input: head = [3,2,0,-4], pos = 1', () => {
		const
			list1 = new ListNode(3),
			list2 = new ListNode(2),
			list3 = new ListNode(0),
			list4 = new ListNode(-4);
		list1.next = list2;
		list2.next = list3;
		list3.next = list4;
		list4.next = list2;

		const result = hasCycle(list1);
		const expected = true;
		expect(result).toStrictEqual(expected);
	});

	it('2. Input: head = [1], pos = -1', () => {
		const result = hasCycle(new ListNode(1));
		const expected = false;
		expect(result).toStrictEqual(expected);
	});
});
