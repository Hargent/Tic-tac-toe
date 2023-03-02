import * as model from "./model";

import boardView from "./Views/boardView";

const controlGameClicks = target => {
	console.log(model.checkWin(target));
	model.checkWin(target);
};

const init = () => {
	boardView.render();
	boardView.gameClickHandler(controlGameClicks);
};
init();
