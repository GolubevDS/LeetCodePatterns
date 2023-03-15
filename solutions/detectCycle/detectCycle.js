/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
	const set = new Set();

	while (head) {
		set.add(head);
		head = head.next;

		if (set.has(head)) {
			return head;
		}
	}

	return null;
}

module.exports = detectCycle;
