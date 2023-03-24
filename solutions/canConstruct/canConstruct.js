/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
	if (ransomNote.length > magazine.length) return false;

	const result = {};

	for (const letter of magazine) {
		result[letter] = result[letter]
			? result[letter] + 1
			: 1;
	}

	for (const letter of ransomNote) {
		if (!result[letter]) return false;
		result[letter]--;
	}

	return true;
}

module.exports = canConstruct;
