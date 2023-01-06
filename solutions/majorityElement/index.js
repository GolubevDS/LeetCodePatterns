/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
	const hash = {};

	for (let num of nums) {
		if (!hash[num]) {
			hash[num] = 0
		}
		hash[num] += 1

		if (hash[num] >= nums.length / 2) {
			return num
		}
	}
}

module.exports = majorityElement;
