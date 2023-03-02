// /**
//  *
//  * @param {Array []} nums Array of arrays
//  * @param {Number} k number of elements pre combination
//  * @returns {[]} array of all possible combinations
//  */

function PossibleCombination(nums, k) {
	const result = [];

	function backtrack(combination, start) {
		if (combination.length === k) {
			let combo = combination.slice();
			// let first = combo[0][0];
			// let last = combo[0][1];
			// let comboTrue = [];
			// for (let i = 0; i < combo.length; i++) {
			// 	if (combo[i][0] === first) {
			// 		comboTrue.push(combo[i]);
			// 		// console.log(result);
			// 	}
			// 	if (combo[i][1] === last) {
			// 		comboTrue.push(combo[i]);
			// 	}
			// }
			// if (comboTrue.length === k) {
			// 	console.log("================================");
			// 	console.log(comboTrue);
			// 	console.log("================================");
			// }

			result.push(combo);
			return;
		}

		for (let i = start; i < nums.length; i++) {
			combination.push(nums[i]);
			backtrack(combination, i + 1);
			combination.pop();
		}
	}

	backtrack([], 0);
	// const fs = require("fs");
	// fs.writeFile(
	// 	"C:/Users/SILVER/Videos/test.txt",
	// 	JSON.stringify(result),
	// 	function (err) {
	// 		if (err) {
	// 			return console.log(err);
	// 		}

	// 		console.log("The file was saved!");
	// 	}
	// );
	return result[0];
}
function combine(nums, k) {
	const result = [];

	function backtrack(combination, start) {
		if (combination.length === k) {
			result.push(combination.slice());
			return;
		}

		for (let i = start; i < nums.length; i++) {
			combination.push(nums[i]);
			backtrack(combination, i + 1);
			combination.pop();
		}
	}

	backtrack([], 0);
	return result;
}
// function combine(nums, k) {
// 	const out = [];
// 	dfs(nums, [], out, k);
// 	return out;
// }

// function dfs(nums, inner, outer, k) {
// 	if (inner.length === k) {
// 		outer.push(inner);
// 	} else {
// 		for (let i = 0; i < nums.length; i++) {
// 			const _nums = nums.slice(i + 1);
// 			const _inner = inner.concat([nums[i]]);
// 			dfs(_nums, _inner, outer, k);
// 		}
// 	}
// }
//prettier ignore
[
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
];

// PossibleCombination(
// 	[
// 		[0, 0],
// 		[0, 1],
// 		[0, 2],
// 		[1, 0],
// 		[1, 1],
// 		[1, 2],
// 		[2, 0],
// 		[2, 1],
// 		[2, 2],
// 	],
// 	3
// );

console.log(
	PossibleCombination(
		[
			[0, 0],
			[0, 1],
			[0, 2],
			[1, 0],
			[1, 1],
			[1, 2],
			[2, 0],
			[2, 1],
			[2, 2],
		],
		3
	)
);
// // export default PossibleCombination;
