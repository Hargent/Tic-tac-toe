import getAllPointCombos from "./results";
import gridArea from "./label";

class GameAlgo {
	_gameAlgo(dimensions) {
		const labels = gridArea(dimensions);

		const combos = getAllPointCombos(dimensions);

		return [labels, combos];
	}
}

//take dimension
// generate label and generate possible combos

export default new GameAlgo();
