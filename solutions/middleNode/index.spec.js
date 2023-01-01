const ListNode = require('../../helpers/listNode');
const middleNode = require('.');

describe('Middle of the Linked List', () => {
	it('1. Input: head = [1,2,3,4,5]', () => {
		const
			list1 = new ListNode(1),
			list2 = new ListNode(2),
			list3 = new ListNode(3),
			list4 = new ListNode(4),
			list5 = new ListNode(5);
		list1.next = list2;
		list2.next = list3;
		list3.next = list4;
		list4.next = list5;

		const result = middleNode(list1);
		const expected = list3;
		expect(result).toStrictEqual(expected);
	});

	it('2. Input: head = [1]', () => {
		const list = new ListNode(1);

		const result = middleNode(list);
		const expected = list;
		expect(result).toStrictEqual(expected);
	});
});
