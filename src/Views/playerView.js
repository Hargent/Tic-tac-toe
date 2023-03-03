class PlayerView {
	_data;
	_currentPlayer;
	/**
	 *
	 * @param {obj{}} data  Object of Game data
	 */
	_getPlayerData(data) {
		this._data = data;

		this._currentPlayer = this._data.homeTurn
			? this._data.home.name
			: this._data.away.name;
	}
	/**
	 *
	 * @param {Number[]} target 2D coordinates of a point of event
	 * @returns Void Only when cells are clicked twice
	 */
	placeMark(target) {
		const cell = document.querySelector(
			`[data-cell="${target.join(",")}"]`
		);

		if (cell?.classList.length > 2 || this._data.homeWin !== null) {
			cell?.classList.add("disabled");
			return;
		}
		cell.classList.add(this._currentPlayer);
	}
	/**
	 * Handles hovering event on cells
	 * @param {Number[]} target  2D coordinates of a point of event
	 * @returns Void Only when the game is over
	 */
	setBoardHoverClass(target) {
		if (this._data.homeWin !== null) return;

		target.classList.remove(`${this._data.home.name}-hover`);
		target.classList.remove(`${this._data.away.name}-hover`);
		if (this._data.homeTurn) {
			target.classList.add(`${this._data.home.name}-hover`);
		} else {
			target.classList.add(`${this._data.away.name}-hover`);
		}
	}
	/**
	 * Handles the removal hovering event on cells
	 * @param {Number[]} target  2D coordinates of a point of event
	 * @returns Void Only when the game is over
	 */
	removeBoardHoverClass(target) {
		if (this._data.homeWin !== null) return;

		target.classList.remove(`${this._data.home.name}-hover`);
		target.classList.remove(`${this._data.away.name}-hover`);
	}
}

export default new PlayerView();
