/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
	const result = new Array(nums.length + 1).fill(-1);

	for (let num of nums) {
		result[num] = num;
	}

	return result.indexOf(-1);
}

module.exports = missingNumber;