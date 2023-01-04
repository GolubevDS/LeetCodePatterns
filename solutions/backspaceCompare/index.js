/**
 * @param {string} str
 * @return {string}
 */
function modify(str) {
	let backspaces = 0,
	    result = '';

	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] === '#') {
			backspaces++;
		} else if (backspaces > 0) {
			backspaces--;
		} else {
			result = str[i] + result;
		}
	}

	return result;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
	return modify(s) === modify(t);
}

module.exports = backspaceCompare;
