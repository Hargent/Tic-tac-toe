import * as model from "./model";

import boardView from "./Views/boardView";
import gameAlgo from "./Views/Algorithm/gameAlgo";
import gameView from "./Views/gameView";
import playerView from "./Views/playerView";

const updateData = () => {
	playerView._getPlayerData(model.state.player);
	gameView._getGameData(model.state);
};
const controlGameClicks = target => {
	model.state.player.homeTurn
		? model.state.player.home.inputs.push(target)
		: model.state.player.away.inputs.push(target);

	playerView.placeMark(target);
	model.state.game.isEnd = model.checkWin();
	gameView.gamePlay();
	updateData();
	gameView._render(model.state.player.homeWin);
};
const controlGameHoverON = target => {
	playerView.setBoardHoverClass(target);
};
const controlGameHoverOUT = target => {
	playerView.removeBoardHoverClass(target);
};
const generateGameData = () => {
	const dimensions = model.state.game.data.dimensions;
	const gameData = gameAlgo._gameAlgo(dimensions);
	model.state.game.data.labels = gameData[0];
	model.state.game.data.winningCombos = gameData[1];

	playerView._getPlayerData(model.state.player);
	gameView._getGameData(model.state);
};

const init = () => {
	generateGameData();
	boardView.render(model.state.game.data.labels);
	boardView.gameClickHandler(controlGameClicks);
	boardView.gameHoverHandler(controlGameHoverON, controlGameHoverOUT);
};
init();
