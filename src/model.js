const state = {
	game: {
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
		home: "O",
		away: "X",
	},
};
const arrayEquals = (a, b) => {
	return (
		Array.isArray(a) &&
		Array.isArray(b) &&
		a.length === b.length &&
		a.every((val, index) => val === b[index])
	);
};
const checkWin = target => {
	return state.game.winningCombo.some(combination => {
		return combination.every(index => {
			// return cellElements[index].classList.contains(currentClass);
			return arrayEquals(index, target);
		});
	});
};

export { state, checkWin };

// check for only current player as true if all the positions of all the trues is in the possibilities then it is a win
