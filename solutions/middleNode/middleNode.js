/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
	if (!head.next) return head;

	let middle = head,
	    end = head;

	while (end !== null && end.next !== null) {
		middle = middle.next;
		end = end.next.next;
	}

	return middle;
}

module.exports = middleNode;
