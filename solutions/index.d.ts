declare class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val: number);
}
declare class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}
// @ts-ignore
declare class Node {
	val: number;
	children: Node[];
	constructor(val: number, children: Node[]);
}
