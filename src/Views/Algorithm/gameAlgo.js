import getAllPointCombos from "./results";
import gridArea from "./label";

const gameAlgo = dimensions => {
	const labels = gridArea(dimensions);
	console.log(labels);
	const combos = getAllPointCombos(dimensions);
	return [labels, combos];
};

//take dimension
// generate label and generate possible combos
console.log(gameAlgo([3, 3]));
// export default  gameAlgo;
