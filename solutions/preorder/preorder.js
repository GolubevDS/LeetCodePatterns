/**
 * @param {Node|null} root
 * @return {number[]}
 */
function preorder(root) {
	if (!root) return [];

	const stack = [root];
	const result = [];

	while (stack.length > 0) {
		const node = stack.pop();
		result.push(node.val);
		for (let i = node.children.length - 1; i >= 0; i--) {
			stack.push(node.children[i]);
		}
	}

	return result;
}

// function preorder(root) {
// 	if (!root) return []
//
// 	const queue = root.children;
// 	const result = [root.val];
//
// 	while (queue.length > 0) {
// 		const node = queue.shift();
// 		result.push(node.val);
//
// 		if (node.children.length > 0) {
// 			queue.unshift(...node.children);
// 		}
// 	}
//
// 	return result;
// }

module.exports = preorder;
