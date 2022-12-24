const isPalindrome = require('./index');

function ListNode(val) {
	this.val = val;
	this.next = null;
}

describe('Palindrome Linked List', () => {
	it('1. Input: head = [1,2,2,1]', () => {
		const
			list1 = new ListNode(1),
			list2 = new ListNode(2),
			list3 = new ListNode(2),
			list4 = new ListNode(1);
		list1.next = list2;
		list2.next = list3;
		list3.next = list4;

		const result = isPalindrome(list1);
		const expected = true;
		expect(result).toStrictEqual(expected);
	});

	it('2. Input: head = [1]', () => {
		const list = new ListNode(1);

		const result = isPalindrome(list);
		const expected = true;
		expect(result).toStrictEqual(expected);
	});


	it('3. Input: head = [1,2]', () => {
		const
			list1 = new ListNode(1),
			list2 = new ListNode(2);

		list1.next = list2;

		const result = isPalindrome(list1);
		const expected = false;
		expect(result).toStrictEqual(expected);
	});
});
