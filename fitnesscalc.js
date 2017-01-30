var solution;
function FitnessCalc() {

	// this.setSolution = function(newSolution) {
	// 	solution = byte(newSolution);
	// }

	this.setSolution = function(newSolution) {
		solution = byte(newSolution.length);

		for (var i = 0; i < newSolution.length; i++) {
			var character = newSolution.substring(i, i+1);
			if (character.contains("0") || character.contains("1")) {
				solution[i] = byte(character);
			} else {
				solution[i] = 0;
			}
		}
	}

	this.getFitness = function(individual) {
		var fitness = 0;
		
		for (var x = 0; x < individual.size() && x < solution.length; x++) {
			if (individual.getGene(x) == solution[x]) {
				fitness++;
			}
		}
		return fitness;
	}

	this.getMaxFitness = function() {
		var maxFitness = solution.length;
		return maxFitness;
	}
}