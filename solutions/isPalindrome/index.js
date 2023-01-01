/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
	if (!head) {
		return false;
	}

	let
		result = '',
		reverseResult = '',
		node = head;

	while (node) {
		result = `${result}${node.val}`
		reverseResult = `${node.val}${reverseResult}`
		node = node.next
	}

	return result === reverseResult
}

module.exports = isPalindrome;
