/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function findFirstBadVersion(isBadVersion) {
	/**
	 * @param {number} n Total versions
	 * @return {number} The first bad version
	 */
	return function (n) {
		let start = 1,
		    end = n;

		while (end > start) {
			const middle = Math.floor((start + end) / 2),
			      isMiddleBad = isBadVersion(middle);

			if (isMiddleBad && !isBadVersion(middle - 1)) return middle;

			isMiddleBad
				? end = middle
				: start = middle + 1;
		}

		return start;
	};
}

module.exports = findFirstBadVersion;
