/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

var createNStore = function(name, email, pw, arr) {
  var newUser = new User(name, email, pw);
  arr.push(newUser);
}
createNStore('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS', users);
createNStore('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags', users);
createNStore('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup', users);
console.log('Tyler\'s information is ');
//Console.log all of Tylers information

console.log(users[0]);

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

console.log('Lenny\'s information is: ' + JSON.stringify(users[2]) + '.');


//Now create another instance of User using your own information and then add that to your users array.

createNStore('Mike', 'mjstack@fake.com', 'catBurger', users);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

var logUserNames = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].name);
  }
};
logUserNames(users);