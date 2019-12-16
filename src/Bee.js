var Bee = function() {
	// call superclass
	Grub.call(this);

	// assign new values to inherited proeprties
	this.age = 5;
	this.color = 'yellow';

	// create new property
	this.job = 'keep on growing';

};

// set prototype and constructor
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// Tasks
	// pseudoclassical style
	// add following feature to the class
		// extension and contructor
			// call the Grub superclass
			// set the prototype
			// set the constructor
		// inherited property but changed
			// an age property that is set to 5
			// a color property that is set to yellow
		// inherited property but unchaged
			// a food property that is inherited from grub
			// an eat method that is inherited from grub
		// new property
			// a job property that is set to keep on growing

// what is needed
	// code to extend subclass from super-class
		// call super class
			// (super class).call((subclass));
		// inherit (or extend) property/methods
			// (subclass).prototype = Object.create((superclass).prototype);
		// set constructor to subclass not superclass > 
			// (subclass).prototype.constructor = (subclass);

// Pseudocode
	// call superclass and extend
	// assign new values to inherited properties
	// add a new property at the end
