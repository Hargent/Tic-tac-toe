import * as model from "./model";

import boardView from "./Views/boardView";
import gameAlgo from "./Views/Algorithm/gameAlgo";
import gameView from "./Views/gameView";
import playerView from "./Views/playerView";

/**
 * Updates the game data  used by the Views
 */
const updateData = () => {
	playerView._getPlayerData(model.state.player);
	gameView._getGameData(model.state);
};
/**
 * Controls the click event response during game
 * @param {Number[]} target
 */
const controlGameClicks = target => {
	model.saveInputs(target);
	playerView.placeMark(target);
	model.gameStatus();
	if (model.state.game.isEnd) {
		gameView.render(model.state.player.homeWin);
	}
	updateData();
};
/**
 * Controls the hover event response during game
 * @param {Number[]} target
 */
const controlGameHoverON = target => {
	playerView.setBoardHoverClass(target);
};
/**
 * Controls the hover removal event response during game
 * @param {Number[]} target
 */
const controlGameHoverOUT = target => {
	playerView.removeBoardHoverClass(target);
};
/**
 * Generates the Game Data from the State storage in the model module
 */
const generateGameData = () => {
	const dimensions = model.state.game.data.dimensions;
	const gameData = gameAlgo._gameAlgo(dimensions);
	model.state.game.data.labels = gameData[0];
	model.state.game.data.winningCombos = gameData[1];

	playerView._getPlayerData(model.state.player);
	gameView._getGameData(model.state);
};
/**
 *
 * @param {boolean} restart
 * @returns Void only if the game is not to be restarted
 */
const controlRestart = restart => {
	if (!restart) return;
	model.restartGame();
	updateData();
	init();
};
/**
 * Initialize the Beginning of the game
 */
const init = () => {
	generateGameData();
	boardView.render(model.state.game.data.labels);
	boardView.gameClickHandler(controlGameClicks);
	boardView.gameHoverHandler(controlGameHoverON, controlGameHoverOUT);
	gameView.handleRestartBtn(controlRestart);
};
init();
