/**
 * @param {number[]} nums
 */
function NumArray(nums) {
	this.nums = nums;
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
	let result = 0;

	for (let i = left; i <= right; i++) {
		result += this.nums[i];
	}

	return result;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * const obj = new NumArray(nums)
 * const param_1 = obj.sumRange(left, right)
 */

module.exports = NumArray;