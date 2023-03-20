const TreeNode = require('../../helpers/treeNode');
const levelOrder = require('./levelOrder');

describe('Binary Tree Level Order Traversal', () => {
	test('returns an empty array for empty input', () => {
		const root = null;
		const expected = [];
		expect(levelOrder(root)).toEqual(expected);
	});

	test('returns the correct result for a tree with one node', () => {
		const root = new TreeNode(1);
		const expected = [[1]];
		expect(levelOrder(root)).toEqual(expected);
	});

	test('returns the correct result for a tree with multiple levels', () => {
		const root = new TreeNode(3,
			new TreeNode(9),
			new TreeNode(20,
				new TreeNode(15),
				new TreeNode(7),
			),
		);
		const expected = [[3], [9, 20], [15, 7]];
		expect(levelOrder(root)).toEqual(expected);
	});
});
