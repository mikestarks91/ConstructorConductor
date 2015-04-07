//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
	this.name = name;
	this.age = age;
};


//Now create three instances of Person with data you make up

var guy = new Person('dude', 23);
var pig = new Person('Wilbur', 'Old enough to be bacon');
var horse = new Person('That one horse from Animal Farm', 'You look tired, Comrade, perhaps a trip to the \'hospital\' will help?');

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
	alert(this.name);
};
