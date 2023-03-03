// /**
//  *
//  * @param {Array []} nums Array of arrays
//  * @param {Number} k number of elements pre combination
//  * @returns {[]} array of all possible combinations
//  */
// function combine(nums, k) {
// 	const result = [];

// 	function backtrack(combination, start) {
// 		if (combination.length === k) {
// 			result.push(combination.slice());
// 			return;
// 		}

// 		for (let i = start; i < nums.length; i++) {
// 			combination.push(nums[i]);
// 			backtrack(combination, i + 1);
// 			combination.pop();
// 		}
// 	}

// 	backtrack([], 0);
// 	return result;
// }
function combine(nums, k) {
	const out = [];
	dfs(nums, [], out, k);
	return out;
}

function dfs(nums, inner, outer, k) {
	if (inner.length === k) {
		outer.push(inner);
	} else {
		for (let i = 0; i < nums.length; i++) {
			const _nums = nums.slice(i + 1);
			const _inner = inner.concat([nums[i]]);
			dfs(_nums, _inner, outer, k);
		}
	}
}
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
	combine(
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
