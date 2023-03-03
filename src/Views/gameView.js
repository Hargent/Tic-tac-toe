class GameView {
	_data;
	_parentElement = document.querySelector("body");

	_getGameData(data) {
		this._data = data;
	}
	// gamePlay(check) {
	// 	// check for winner

	// 	if (check) {
	// 		if (this._data.player.homeTurn) {
	// 			this._data.game.winner = this._data.player.away.name;
	// 			this._data.player.homeWin = false;
	// 		} else {
	// 			this._data.game.winner = this._data.player.home.name;
	// 			this._data.player.homeWin = true;
	// 		}
	// 	} else if (!this._data.game.isEnd) {
	// 		// check draw
	// 		const homeLength = this._data.player.home.inputs.length;
	// 		const awayLength = this._data.player.away.inputs.length;
	// 		const gameLength = this._data.game.data.dimensions.reduce(
	// 			(st, el) => st * el
	// 		);

	// 		if (homeLength + awayLength === gameLength) {
	// 			this._data.game.isDraw = true;
	// 			this._data.game.winner = "draw";
	// 		}
	// 	}
	// 	if (this._data.game.winner === null) return;
	// 	console.log(this._data.game.winner);
	// 	return "";
	// }

	render(data) {
		this._clear();
		const html = this._generateHTML(data);
		this._parentElement.insertAdjacentHTML("afterbegin", html);
	}
	_clear() {
		this._parentElement.innerHTML = "";
	}

	_generateHTML(data) {
		// const winningMessage = document.getElementById("winningMessageText");
		console.log(data);
		if (data === "draw") {
			return `
<div class="winning-message" id="winningMessage">
				<div id="winningMessageText">It is a Draw</div>
				<button id="restartButton">Restart</button>
			</div>`;
		} else if (data === "circle") {
			return `<div class="winning-message" id="winningMessage">
					<div id="winningMessageText">player with 0's wins</div>
					<button id="restartButton">Restart</button>
				</div>`;
		} else if (data === "x") {
			return `<div class="winning-message" id="winningMessage">
					<div id="winningMessageText">player with X's wins</div>
					<button id="restartButton">Restart</button>

			</div>`;
		}

		// home win
		// away win
		// draw
	}
	// restart
}

export default new GameView();
