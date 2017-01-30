var default_gene_length = 64;
var genes = []; //type cast to byte
var fitness; //int
var fitness_calc;


function setup() {
	var ind = new Individual();
	ind.generateIndividual();
}
function Individual() {
	this.generateIndividual = function() {
		for (var i = 0; i < this.size(); i++) {
			genes[i]= byte(int(random(MAX_GENE)));
			console.log(genes[i]);
		}
	}
	//getters and setters

	this.setDefaultGeneLength = function(length) {
		default_gene_length = length;
	}

	this.getGene = function(index){
		return genes[index];
	}

	this.setGene = function(index, value) {
		genes[index] = byte(value);
		fitness = 0;
	}

	this.size = function() {
		return genes.length;
	}

	this.getFitness = function() {
		fitness_calc = new FitnessCalc();
		if (fitness == 0){
			fitness = fitness_calc.getFitness();
		}
		return fitness;
	}


}

