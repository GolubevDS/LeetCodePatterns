/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
	if (s.length > t.length) return false;

	let sIndex = 0;

	for(let i = 0; i < t.length; i++) {
		if (t[i] === s[sIndex]) sIndex++;
		if (sIndex === s.length) return true;
	}

	return sIndex === s.length;
}

module.exports = isSubsequence;
