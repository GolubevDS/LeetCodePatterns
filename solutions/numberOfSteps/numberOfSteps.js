/**
 * @param {number} num
 * @return {number}
 */
function numberOfSteps(num) {
	let stepsCount = 0;

	while (num) {
		num = num % 2 === 0 ? num / 2 : num - 1;
		stepsCount++;
	}

	return stepsCount;
}

module.exports = numberOfSteps;
