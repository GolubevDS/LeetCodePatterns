const ListNode = require('../../helpers/listNode');
const isPalindrome = require('./isPalindrome');

describe('Palindrome Linked List', () => {
	it('returns true for palindrome list', () => {
		const head = new ListNode(1);
		head.next = new ListNode(2);
		head.next.next = new ListNode(3);
		head.next.next.next = new ListNode(2);
		head.next.next.next.next = new ListNode(1);
		const result = isPalindrome(head);
		expect(result).toBe(true);
	});

	it('returns false for non-palindrome list', () => {
		const head = new ListNode(1,
			new ListNode(2,
				new ListNode(3,
					new ListNode(4,
						new ListNode(5),
					),
				),
			),
		);
		const result = isPalindrome(head);
		expect(result).toBe(false);
	});

	it('returns true for single node list', () => {
		const head = new ListNode(1);
		const result = isPalindrome(head);
		expect(result).toBe(true);
	});

	it('returns false for empty list', () => {
		const head = null;
		const result = isPalindrome(head);
		expect(result).toBe(false);
	});
});
