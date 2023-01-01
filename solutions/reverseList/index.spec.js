const ListNode = require('../../helpers/listNode');
const reverseList = require('.');

describe('Reverse Linked List', () => {
	it('1. Input: head = [1,2,3,4,5]', () => {
		const
			list1 = new ListNode(1),
			list2 = new ListNode(2),
			list3 = new ListNode(3),
			list4 = new ListNode(4);
		list1.next = list2;
		list2.next = list3;
		list3.next = list4;

		const result = reverseList(list1);

		list4.next = list3;
		list3.next = list2;
		list2.next = list1;
		list1.next = null;
		const expected = list4;
		expect(result).toStrictEqual(expected);
	});

	it('2. Input: head = [1]', () => {
		const list = new ListNode(1);

		const result = reverseList(list);
		const expected = list;
		expect(result).toStrictEqual(expected);
	});
});
