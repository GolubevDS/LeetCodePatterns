const findFirstBadVersion = require('./findFirstBadVersion');

describe('First Bad Version', () => {
	it('should return the first bad version', () => {
		const isBadVersion = (version) => version >= 4;
		const solution = findFirstBadVersion(isBadVersion)(10);
		expect(solution).toEqual(4);
	});

	it('should return the first bad version when there is only one version', () => {
		const isBadVersion = (version) => version === 1;
		const solution = findFirstBadVersion(isBadVersion)(1);
		expect(solution).toEqual(1);
	});

	it('should return the first bad version when the bad version is the last one', () => {
		const isBadVersion = (version) => version === 10;
		const solution = findFirstBadVersion(isBadVersion)(10);
		expect(solution).toEqual(10);
	});
});

