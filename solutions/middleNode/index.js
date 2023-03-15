/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
	if (!head.next) {
		return head;
	}

	const values = [head];
	let node = head;

	while (node.next) {
		node = node.next;
		values.push(node);
	}

	return values[Math.floor(values.length / 2)];
}

module.exports = middleNode;
