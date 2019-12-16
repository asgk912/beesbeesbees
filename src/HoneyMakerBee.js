var HoneyMakerBee = function() {
	Bee.call(this);
	
	// assign new value to inherited properties
	this.age = 10;
	this.job = 'make honey';

	// add new properties
	this.honeyPot = 0;

};

// set prototype and constructor
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

//ad new method
HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
	this.honeyPot--;
};

// Tasks
	// pseudoclassical style
	// add following feature to the class
		// extension and contructor
			// call the Bee superclass
			// set the prototype
			// set the constructor
		// properties inherited but unchanged
			// a color property inherited from bee that is set to yellow
			// a food property that is inherited from grub
			// an eat method that is inherited from grub
		// property inherited but changed value
			// an age property that is set to 10
			// a job property that is set to make honey
		// new property
			// a honeyPot property that is set to 0
			// a makeHoney method that adds 1 to that honeyBee\'s honeyPot
			// a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot

// Pseudocode
