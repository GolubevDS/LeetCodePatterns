/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
	let result = nums[0];

	for (let i = 1; i < nums.length; i++) {
		result ^= nums[i];
	}

	return result;
}

module.exports = singleNumber;