/**
 * Game class that controls the game behaviour
 */
class GameView {
	_data;
	_parentElement = document.querySelector("body");
	/**
	 *
	 * @param {obj{}} data  Object of Game data
	 */
	_getGameData(data) {
		this._data = data;
	}
	/**
	 *
	 * @param { ()=>{}} handler A controller handler function that is called to handle the click event
	 */
	handleRestartBtn(handler) {
		this._parentElement.addEventListener("click", e => {
			const restartBtn = e.target?.closest("#restartButton");
			if (!restartBtn) return;
			this._parentElement.innerHTML = "";
			handler(true);
		});
	}
	/**
	 *
	 * @param {obj} data The data to be rendered to the parent element
	 */
	render(data) {
		this._clear();
		const html = this._generateHTML(data);
		this._parentElement.insertAdjacentHTML("afterbegin", html);
	}
	/**
	 * Clears the parent element's content before another rendering takes place
	 */
	_clear() {
		this._parentElement.innerHTML = "";
	}
	/**
	 *
	 * @param {obj} data The game status / winner/draw
	 * @returns {string} The HTML string to be rendered
	 */
	_generateHTML(data) {
		// const winningMessage = document.getElementById("winningMessageText");

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
