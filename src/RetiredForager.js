var RetiredForagerBee = function() {
	// call superclass
	ForagerBee.call(this);

	// assign new values to inhertied properties
	this.age = 40;
	this.job = 'gamble';
	this.canFly = false;
	this.color = 'grey';
};

// set prototype and constructor
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// add new methods
RetiredForagerBee.prototype.forage = function() {
	return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function(treasure) {
	this.treasureChest.push(treasure);
};


// Tasks
	// pseudoclassical style
	// add following feature to the class
		// extension and contructor
			// call the ForagerBee superclass
			// set the prototype
			// set the constructor
		// inherited properties with unchanged values
			// a food property that is inherited from grub
			// an eat method that is inherited from grub
			// a treasureChest property inherited from ForagerBee that is set to an empty array []
		// inherited properties with changed values
			// an age property that is set to 40
			// a job property that is set to gamble
			// a canFly property that is set to false
			// a color property that is set to grey
		// inherited methos with changed functionality
			// a forage method that returns "I am too old, let me play cards instead"
			// an always winning gamble method that allows the bee to add a treasure to the treasureChest

// Pseudocode
