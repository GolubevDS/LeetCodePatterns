/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
	if (!head) {
		return null;
	}

	let reversed = null;

	while (head) {
		let tmp = head.next;
		head.next = reversed;
		reversed = head;
		head = tmp;
	}

	return reversed;
}

module.exports = reverseList;
