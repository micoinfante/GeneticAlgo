var individual = [];

function Population (population_size, initialize) {
	/*
		if args[0]!= integer or args[1] == boolean
		 to do 
	*/
	for (var x = 0; x < population_size; x++) {
		individual.push(new Individual());
	}
	//initialize population
	if(initialize) {
		for (var i = 0; i < this.size(); i++) {
			new_individual = new Individual();
			new_individual.generateIndividual();
			this.saveIndividual(i, new_individual);
		}
	}

	//getters & setters

	this.getIndividual = function(index) {
		return individua[index];
	}

	this.getFittest = function() {
		var fittest = individual[0];

		//loop through individuals to find the fittest
		for (var i =0; i < this.size(); i++) {
			if (fittest.getFitness() <= this.getIndividual(i).getFitness()) {
				fittest = this.getIndividual(i);
			}
		}
		return fittest; 
	}

	this.size = function() {
		return individual.length;
	}

	this.saveIndividual(index, indiv) {
		individual[index] = indiv;
	}
}