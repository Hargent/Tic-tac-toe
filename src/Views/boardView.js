/**
 * Class that generates the board view and handles the board events
 */
class BoardView {
	_parentElement = document.querySelector("body");
	/**
	 *
	 * @param { ()=>{}} handler A controller handler function that is called to handle the click event
	 */
	gameClickHandler(handler) {
		this._parentElement.addEventListener("click", e => {
			const cellBtn = e.target.closest(".cell");
			if (!cellBtn) return;
			const target = cellBtn.dataset.cell
				.split(",")
				.map(str => parseInt(str));

			handler(target);
		});
	}
	/**
	 *
	 * @param {()=>{}} handlerON A controller handler function that is called to handle the hover-ON event
	 * @param { ()=>{}} handlerOUT A controller handler function that is called to handle the hover-OFF event
	 */
	gameHoverHandler(handlerON, handlerOUT) {
		this._parentElement.addEventListener("mouseover", e => {
			const cellBtn = e.target.closest(".cell");
			if (!cellBtn) return;

			handlerON(cellBtn);
		});
		this._parentElement.addEventListener("mouseout", e => {
			const cellBtn = e.target.closest(".cell");
			if (!cellBtn) return;

			handlerOUT(cellBtn);
		});
	}
	/**
	 *
	 * @param {obj[]} data The data to be rendered to the parent element
	 */
	render(data) {
		//
		const html = this._generateHTML(data);
		this._parentElement.insertAdjacentHTML("afterbegin", html);
	}
	/**
	 *
	 * @param {[Number[]]} labels An Array of 2D coordinates of each point on the grid
	 * @returns {string} The HTML string to be rendered
	 */
	_generateHTML(labels) {
		return `<div class="board" id="board">
        ${labels
			.map(label => {
				return `<div class="cell" data-cell=${label}></div>`;
			})
			.join("")}
       </div>`;
	}
}

export default new BoardView();
