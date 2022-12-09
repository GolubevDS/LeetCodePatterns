/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
	const set = [];

	for(let num of nums) {
		if (set.includes(num)) {
			return true;
		}
		set.push(num);
	}

	return false;
	// return !(new Set(nums).size === nums.length)
}

module.exports = containsDuplicate;
