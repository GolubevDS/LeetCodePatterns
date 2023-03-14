function createLinkedListFromArray(arr) {
	if (!arr || arr.length === 0) {
		return null;
	}

	let head = {
		val: arr[0],
		next: null,
	};
	let current = head;

	for (let i = 1; i < arr.length; i++) {
		let newNode = {
			val: arr[i],
			next: null,
		};
		current.next = newNode;
		current = newNode;
	}

	return head;
}

module.exports = createLinkedListFromArray;
