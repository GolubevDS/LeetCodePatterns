/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
	const result = [];

	for (let i = 1; i <= n; i++) {
		let value = '';

		if (i % 3 === 0) value += 'Fizz';
		if (i % 5 === 0) value += 'Buzz';

		result.push(value ? value : i.toString())
	}

	return result;
}

module.exports = fizzBuzz;
