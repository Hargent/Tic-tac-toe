/**
 * Algorithm for generating all possible linear combination of points in a 2D grid
 */
const getAllPointCombos = dimensions => {
	let combinations = [];
	for (let i = 0; i < dimensions[0]; i++) {
		for (let j = 0; j < dimensions[1]; j++) {
			// Generate combinations along rows
			if (j <= dimensions[1] - 3) {
				combinations.push([
					[i, j],
					[i, j + 1],
					[i, j + 2],
				]);
			}
			// Generate combinations along columns
			if (i <= dimensions[0] - 3) {
				combinations.push([
					[i, j],
					[i + 1, j],
					[i + 2, j],
				]);
			}
			// Generate combinations along diagonals
			if (i <= dimensions[0] - 3 && j <= dimensions[1] - 3) {
				combinations.push([
					[i, j],
					[i + 1, j + 1],
					[i + 2, j + 2],
				]);
			}
			if (i <= dimensions[0] - 3 && j >= 2) {
				combinations.push([
					[i, j],
					[i + 1, j - 1],
					[i + 2, j - 2],
				]);
			}
		}
	}
	return combinations;
};
export default getAllPointCombos;
