const state = {
	game: {
		data: {
			dimensions: [3, 3],
			labels: [],
			winningCombos: [],
		},
		isEnd: false,
		isDraw: false,
	},
	player: {
		homeWin: null,
		homeTurn: false,
		home: {
			name: "circle",
			inputs: [],
		},
		away: {
			name: "x",
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

const saveInputs = target => {
	const isSaved = state.player.homeTurn
		? isCOntains(state.player.home.inputs, target)
		: isCOntains(state.player.away.inputs, target);

	if (isSaved) {
		state.player.homeTurn = state.player.homeTurn;
		return;
	}
	if (state.player.homeWin !== null) return;
	state.player.homeTurn = !state.player.homeTurn;

	state.player.homeTurn
		? state.player.home.inputs.push(target)
		: state.player.away.inputs.push(target);
};
const checkWin = () => {
	const target = state.player.homeTurn
		? state.player.home.inputs
		: state.player.away.inputs;

	return state.game.data.winningCombos.some(combination => {
		return combination.every(index => {
			return isCOntains(target, index);
		});
	});
};
const checkDraw = () => {
	const target = state.player.homeTurn
		? state.player.home.inputs
		: state.player.away.inputs;

	return state.game.data.winningCombos.some(combination => {
		return combination.every(index => {
			return isCOntains(target, index);
		});
	});
};
const gameStatus = () => {
	let currentPlayer;
	if (state.player.homeTurn === null) return;
	state.player.homeTurn
		? (currentPlayer = state.player.away.name)
		: (currentPlayer = state.player.home.name);

	if (checkWin()) {
		console.log(`${currentPlayer} wins`);
		state.player.homeWin = currentPlayer;
		state.player.homeTurn = null;
		state.game.isEnd = true;
	} else if (checkDraw()) {
		console.log("draw");
		state.player.homeWin = "draw";
		state.player.homeTurn = null;
		state.game.isEnd = true;
		state.game.isDraw = true;
	}
};

export { state, gameStatus, isCOntains, saveInputs };

// check for only current player as true if all the positions of all the trues is in the possibilities then it is a win
// using some, i only need one list out of all possibilities to be true
// with every, i need all the elements in the list to return true
// i need a list of all inputs of each player
// for every click i check if the list contains any sequence of possibilties using the first three notes above
