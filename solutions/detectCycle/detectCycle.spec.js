const assert = require('node:assert');
const detectCycle = require('./detectCycle');
const createLinkedListFromArray = require('../../helpers/createLinkedListFromArray');

describe('detectCycle', function () {
	it('should return null for null input', function () {
		const head = null;
		const result = detectCycle(head);
		assert.strictEqual(result, null);
	});

	it('should return null for non-cyclic list', function () {
		const arr = [1, 2, 3, 4, 5];
		const head = createLinkedListFromArray(arr);
		const result = detectCycle(head);
		assert.strictEqual(result, null);
	});

	it('should return node at start of cycle', function () {
		const arr = [1, 2, 3, 4, 5];
		const head = createLinkedListFromArray(arr);
		const lastNode = head.next.next.next.next;
		lastNode.next = head.next;
		const result = detectCycle(head);
		assert.strictEqual(result, head.next);
	});

	it('should return node in middle of cycle', function () {
		const arr = [1, 2, 3, 4, 5];
		const head = createLinkedListFromArray(arr);
		const lastNode = head.next.next.next.next;
		lastNode.next = head.next.next;
		const result = detectCycle(head);
		assert.strictEqual(result, head.next.next);
	});

	it('should return node at end of cycle', function () {
		const arr = [1, 2, 3, 4, 5];
		const head = createLinkedListFromArray(arr);
		const lastNode = head.next.next.next.next;
		lastNode.next = lastNode;
		const result = detectCycle(head);
		assert.strictEqual(result, lastNode);
	});
});
