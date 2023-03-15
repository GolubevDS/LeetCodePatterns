const ListNode = require('./listNode');

/**
 * Creates a linked list from an array of values.
 *
 * @param {Array<number>} arr - The array of values to create the linked list from.
 * @returns {ListNode | null} The head node of the linked list, or null if the input array is empty.
 */
function createLinkedListFromArray(arr) {
	if (!arr || arr.length === 0) {
		return null;
	}

	let head = new ListNode(arr[0]);
	let current = head;

	for (let i = 1; i < arr.length; i++) {
		let newNode = new ListNode(arr[i]);
		current.next = newNode;
		current = newNode;
	}

	return head;
}

module.exports = createLinkedListFromArray;
