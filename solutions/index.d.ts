declare class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val: number);
}
// @ts-ignore
declare class Node {
	val: number;
	children: Node[];
	constructor(val: number, children: Node[]);
}
