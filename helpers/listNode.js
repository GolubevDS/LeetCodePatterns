/**
 * A node in a singly-linked list.
 *
 * @constructor
 * @param {number} val - The numeric value of the node.
 * @property {number} val - The numeric value of the node.
 * @property {ListNode | null} next - The next node in the linked list, or null if this is the last node.
 */
function ListNode(val) {
	this.val = val;
	this.next = null;
}

module.exports = ListNode;
