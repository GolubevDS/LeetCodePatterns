const ListNode = require('../../helpers/listNode');
const removeElements = require('.');

describe('Remove Linked List Elements', () => {
	it('1. Input: head = [1,2,3,1,4], val = 1', () => {
		const
			list1 = new ListNode(1),
			list2 = new ListNode(2),
			list3 = new ListNode(3),
			list4 = new ListNode(1),
			list5 = new ListNode(4);
		list1.next = list2;
		list2.next = list3;
		list3.next = list4;
		list4.next = list5;
		const result = removeElements(list1, 1);

		list2.next = list3;
		list3.next = list5;
		const expected = list2;

		expect(result).toStrictEqual(expected);
	});

	it('2. Input: head = [], val = 1', () => {
		const list = new ListNode();

		const result = removeElements(list, 1);
		const expected = list;
		expect(result).toStrictEqual(expected);
	});
});
