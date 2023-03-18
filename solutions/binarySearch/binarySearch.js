/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binarySearch(nums, target) {
	let start = 0,
	    end = nums.length - 1;

	while (start <= end) {
		const index = Math.floor((start + end) / 2)

		if (nums[index] === target) return index;
		if (nums[index] > target) end = index - 1;
		if (nums[index] < target) start = index + 1;
	}

	return -1;
}

module.exports = binarySearch;
