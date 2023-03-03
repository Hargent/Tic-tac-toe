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

	render(data) {
		//
		const html = this._generateHTML(data);
		this._parentElement.insertAdjacentHTML("afterbegin", html);
	}
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
