/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
	const counter = {};
	let result = 0;
	let hasOdd = false;

	s.split('').forEach(char => {
		if (!counter[char]) {
			counter[char] = 0;
		}
		counter[char]++;
	});

	for (const key in counter) {
		if (counter[key] % 2) {
			result += counter[key] - 1;
			hasOdd = true;
		} else {
			result += counter[key];
		}
	}

	result += hasOdd ? 1 : 0;

	return result;
}

module.exports = longestPalindrome;
