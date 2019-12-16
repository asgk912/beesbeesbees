var ForagerBee = function() {
	// call superclass
	Bee.call(this);

	// assign new values to inhertied properties
	this.age = 10;
	this.job = 'find pollen';

	// add new properties
	this.canFly = true;
	this.treasureChest = [];
};

// set prototype and constructor
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

// add new methods
ForagerBee.prototype.forage = function(treasure) {
	this.treasureChest.push(treasure);
};


// Tasks
	// pseudoclassical style
	// add following feature to the class
		// extension and contructor
			// call the Bee superclass
			// set the prototype
			// set the constructor
		// inhertied property with unchanged value
			// a color property inherited from bee that is set to yellow
			// a food property that is inherited from grub
			// an eat method that is inherited from grub
		// inherited property with changed value
			// an age property that is set to 10
			// a job property that is set to find pollen
		// new property
			// a canFly property that is set true		
			// a treasureChest property that is set to an empty array []
		// new method
			// a forage method that allows the bee to add a treasure to the treasureChest