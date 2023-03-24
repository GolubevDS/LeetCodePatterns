/**
 * A node in a singly-linked list.
 *
 * @constructor
 * @param {number} val - The numeric value of the node.
 * @param {ListNode} [next=null] - The next node in the list. Defaults to null.
 * @property {number} val - The numeric value of the node.
 * @property {ListNode | null} next - The next node in the linked list, or null if this is the last node.
 */
function ListNode(val, next = null) {
	this.val = val;
	this.next = next;
}

module.exports = ListNode;
