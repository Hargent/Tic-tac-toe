const state = {
	game: {
		isEnd: false,
		homeTurn: true,
		isDraw: false,
		homeWin: null,
		winner: null,
		winningCombo: [
			[
				[0, 0],
				[0, 1],
				[0, 2],
			],
			[
				[1, 0],
				[1, 1],
				[1, 2],
			],
			[
				[2, 0],
				[2, 1],
				[2, 2],
			],
			[
				[0, 0],
				[1, 0],
				[2, 0],
			],
			[
				[0, 1],
				[1, 1],
				[2, 1],
			],
			[
				[0, 2],
				[1, 2],
				[2, 2],
			],
			[
				[0, 0],
				[1, 1],
				[2, 2],
			],
			[
				[0, 2],
				[1, 1],
				[2, 0],
			],
		],
	},
	player: {
		home: {
			name: "O",
			inputs: [],
		},
		away: {
			name: "X",
			inputs: [],
		},
	},
};
const isCOntains = (arr, chk) => {
	return arr.some(ar => {
		if (
			Array.isArray(ar) &&
			Array.isArray(chk) &&
			ar.length === chk.length
		) {
			let isTrue = [];
			for (let i = 0; i < ar.length; i++) {
				isTrue.push(ar[i] === chk[i]);
			}

			return isTrue.every(el => el === true);
		}
		return false;
	});
};
const checkWin = target => {
	return state.game.winningCombo.some(combination => {
		return combination.every(index => {
			return isCOntains(target, index);
		});
	});
};

export { state, checkWin };

// check for only current player as true if all the positions of all the trues is in the possibilities then it is a win
// using some, i only need one list out of all possibilities to be true
// with every, i need all the elements in the list to return true
// i need a list of all inputs of each player
// for every click i check if the list contains any sequence of possibilties using the first three notes above
