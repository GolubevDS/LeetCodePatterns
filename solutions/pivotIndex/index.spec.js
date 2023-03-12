const pivotIndex = require('.');

describe("Find Pivot Index", () => {
	it("should return -1 if the input array is empty", () => {
		const result = pivotIndex([]);
		expect(result).toEqual(-1);
	});

	it("should return -1 if there is no pivot index", () => {
		const input = [1, 2, 3, 4, 5];
		const result = pivotIndex(input);
		expect(result).toEqual(-1);
	});

	it("should return the correct pivot index if there is one", () => {
		const input = [1, 7, 3, 6, 5, 6];
		const result = pivotIndex(input);
		expect(result).toEqual(3);
	});

	it("should work with arrays containing only one element", () => {
		const input = [1];
		const result = pivotIndex(input);
		expect(result).toEqual(0);
	});
});
