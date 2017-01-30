var uniform_rate = 0.5;
var mutation_rate = 0.015;
var tournament_size = 5;
var elitism = true;
var new_population;
function setup() {

}

function EvolvePop(pop) {

	new_population = new Population(pop.size(), false);

	//min best individual
	if (elitism) {
		new_population.saveIndividual(0, pop.getFittest());
	}
	
	//Crossover pop
	var elitism_offset;
	if (elitism) {
		elitism_offset = 1;
	} else {
		elitism_offset = 0;
	}

	for (var i = elitism_offset; i < pop.size(); i++) {
		var indiv1 = tournamentSelection(pop);
		var indiv2 = tournamentSelection(pop);
		var new_indiv = crossover(indiv1, indiv2);
		new_population.saveIndividual(i, new_indiv);
	}

	for (var i = elitism_offset; i < new_population.size(); i++) {
		this.mutate(new_population.getIndividual(i));
	}

	return new_population;
} 

function crossover(indiv1, indiv2) {
	var new_sol = new Individual();
	for (var i = 0; i < indiv1.size(); i++) {
		if (random() <= uniform_rate) {
			new_sol.setGene(i, indiv1.getGene(i));		
		} else {
			new_sol.setGene(i, indiv2.getGene(i));
		}
 	}
 	return new_sol;
}

function mutate(indiv) {
	for (var i = 0; i < indiv.size(); i++) {
		if(random() <= mutation_rate) {
			gene = byte(int(random()));
			indiv.setGene(i, gene);
		}
	}
}
function tournamentSelection(pop) {
	var tournament = new Population(tournament_size, false);

	for( var i = 0; i <tournament_size; i++) {
		var randomId = int(random() * pop.size());
		tournament.saveIndividual(i, pop.getIndividual(randomId));

	}
	//fittest
	var fittest = tournament.getFittest();
	return fittest;
}


