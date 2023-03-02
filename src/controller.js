import * as model from "./model";

import boardView from "./Views/boardView";

const controlGameClicks = target => {
	model.state.player.home.inputs.push(target);

	model.state.game.isEnd = model.checkWin(model.state.player.home.inputs);
	console.log(model.state.game.isEnd);
};

const init = () => {
	boardView.render();
	boardView.gameClickHandler(controlGameClicks);
};
init();
