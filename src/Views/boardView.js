import gridArea from "./Algorithm/label";

class BoardView {
	_parentElement = document.querySelector("body");

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

	render() {
		//
		const html = this._generateHTML();
		this._parentElement.insertAdjacentHTML("afterbegin", html);
	}
	_generateHTML() {
		const labels = gridArea(3, 3);
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
