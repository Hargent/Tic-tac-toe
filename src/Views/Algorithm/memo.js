function getAllPointCombinations(boardSize, numPoints) {
	const combinations = [];

	// Define a recursive helper function with memoization
	const memo = new Map();
	function generateCombinationsRecursive(pointsSoFar, remainingPoints) {
		if (pointsSoFar.length === numPoints) {
			combinations.push(pointsSoFar);
			return;
		}
		if (remainingPoints.length === 0) {
			return;
		}
		const memoKey = remainingPoints.toString();
		if (memo.has(memoKey)) {
			// Use memoized value if available
			const memoValue = memo.get(memoKey);
			for (const combination of memoValue) {
				const newPointsSoFar = pointsSoFar.concat(combination);
				generateCombinationsRecursive(newPointsSoFar, remainingPoints);
			}
			return;
		}
		const newMemoValue = [];
		for (let i = 0; i < remainingPoints.length; i++) {
			const newPointsSoFar = pointsSoFar.concat(remainingPoints[i]);
			const newRemainingPoints = remainingPoints.slice(i + 1);
			generateCombinationsRecursive(newPointsSoFar, newRemainingPoints);
			newMemoValue.push([remainingPoints[i], ...combinations.slice()]);
			combinations.length = pointsSoFar.length; // Backtrack
		}
		memo.set(memoKey, newMemoValue);
	}

	// Generate all possible points on the board
	const points = [];
	for (let x = 0; x < boardSize[0]; x++) {
		for (let y = 0; y < boardSize[1]; y++) {
			points.push([x, y]);
		}
	}

	// Generate all possible combinations of points
	generateCombinationsRecursive([], points);

	return combinations;
}

console.time("t11");
console.log(getAllPointCombinations([3, 3], 3));
console.timeEnd("t11");
