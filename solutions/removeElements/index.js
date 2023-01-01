/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
	const result = {};
	result.next = head;

	let current = result;
	while (current.next) {
		if (current.next.val === val) {
			current.next = current.next.next;
		} else {
			current = current.next;
		}
	}

	return result.next;
}

module.exports = removeElements;
