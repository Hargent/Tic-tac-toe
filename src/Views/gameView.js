class GameView {
	_data;
	_parentElement = document.querySelector("body");

	_getGameData(data) {
		this._data = data;
	}
	gamePlay() {
		// change turn
		this._data.player.homeTurn = !this._data.player.homeTurn;
		// check for winner

		if (this._data.game.isEnd) {
			if (this._data.player.homeTurn) {
				this._data.game.winner = this._data.player.away.name;
				this._data.player.homeWin = false;
				console.log("away");
			} else {
				this._data.game.winner = this._data.player.home.name;
				this._data.player.homeWin = true;
				console.log("home");
			}
		} else if (!this._data.game.isEnd) {
			// check draw
			const homeLength = this._data.player.home.inputs.length;
			const awayLength = this._data.player.away.inputs.length;
			const gameLength = this._data.game.data.dimensions.reduce(
				(st, el) => st * el
			);

			if (homeLength + awayLength === gameLength)
				this._data.game.isDraw = true;
			console.log("draw");
		}
	}
	_render(res) {
		const html = this._generateHTML(res);
		this._parentElement.insertAdjacentHTML("beforeend", html);
	}
	_generateHTML(result) {
		if (result === null) {
			return `
			<div class="winning-message" id="winningMessage">
				<div id="winningMessageText">It is a Draw</div>
				<button id="restartButton">Restart</button>
			</div>`;
		}
		return `<div class="winning-message" id="winningMessage">
				<div id="winningMessageText">player with  ${result ? "0's" : "X's"} wins</div>
				<button id="restartButton">Restart</button>
			</div>
		`;

		// home win
		// away win
		// draw
	}
	// restart
}

export default new GameView();
