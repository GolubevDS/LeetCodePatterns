/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
	if (!list1) return list2;
	if (!list2) return list1;

	const result = {};

	if (list1.val < list2.val) {
		result.val = list1.val;
		result.next = mergeTwoLists(list1.next, list2);
	} else {
		result.val = list2.val;
		result.next = mergeTwoLists(list1, list2.next);
	}

	return result;
}

module.exports = mergeTwoLists;
