/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
	if (!head) {
		return false;
	}

	let [fast, slow] = [head, head];

	while (slow.next && fast.next.next) {
		slow = slow.next
		fast = fast.next.next

		if (fast === slow) {
			return true
		}
	}

	return false;
}

module.exports = hasCycle;
