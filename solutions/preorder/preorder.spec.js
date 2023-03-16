const preorder = require('./preorder');

class Node {
	val;
	children;

	constructor(val, children) {
		this.val = val;
		this.children = children;
	}
}

function createTreeRoot() {
	return new Node(1, [
		new Node(2, [
			new Node(4, []),
			new Node(5, [])
		]),
		new Node(3, [
			new Node(6, []),
			new Node(7, [
				new Node(8, [])
			])
		])
	]);
}

describe('N-ary Tree Preorder Traversal', () => {
	test('should return an empty array when root is null', () => {
		expect(preorder(null)).toEqual([]);
	});

	test('should return an array of values in preorder traversal order', () => {
		const root = createTreeRoot();
		expect(preorder(root)).toEqual([1, 2, 4, 5, 3, 6, 7, 8]);
	});

	test('should return an array with a single value when root has no children', () => {
		const root = new Node(1, []);
		expect(preorder(root)).toEqual([1]);
	});
});
