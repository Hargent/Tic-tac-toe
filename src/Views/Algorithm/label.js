/**
 *Generates label for each grid area
 * @param {*} arr Array of iterations
 * @param {*} iterH Height iteration
 * @param {*} iterW Width iteration
 * @param {Number} width
 * @param {Number} height
 * @returns Array of arrays of iterations
 */
// const gridArea = (width, height, arr = [], iterH = 0, iterW = 0) => {
// 	let subArr = [];

// 	if (iterH > height - 1 && iterW >= width - 1) return;

// 	if (iterH > height - 1) {
// 		iterW++;

// 		iterH = 0;
// 	}

// 	subArr = [+iterW, +iterH];
// 	iterH++;

// 	arr.push(subArr);

// 	gridArea(width, height, arr, iterH, iterW);

// 	return arr;
// };
/**
 *
 */
function gridArea(dimensions) {
	return [...Array(dimensions[0] * dimensions[0])].map((_, i) => [
		i % dimensions[0],
		Math.floor(i / dimensions[0]),
	]);
}
// console.log(gridArea(7, 7));
// console.log(gridArea([3, 3]));
export default gridArea;
