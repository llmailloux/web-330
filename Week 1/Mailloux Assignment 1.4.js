/*
============================================
; Title: Assignment 1.4 
; Author: Laurie Mailloux  
; Date:   February 18, 2020
; Description: Duck Typing, A.A.K. "Interfaces"
;===========================================


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

//start program

//header
const header = require("./Mailloux-header.js");

console.log(header.display("Laurie", "Mailloux", "Assignment 1.3"));

//new line
console.log("");

//functions
function Car(model) {
  this.model = model;
}
Car.prototype.start = function() {
  console.log("Car added to the racetrack!");
};
function Truck(model, year) {
  this.model = model;
  this.year = year;
}
Truck.prototype.start = function() {
  console.log("Truck added to the racetrack!");
};
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}
Jeep.prototype.start = function() {
  console.log("Jeep added to the racetrack!");
};

//variable
var racetrack = [];

function driveIt(vehicle) {
  vehicle.start();

  racetrack.push(vehicle);
}
var impala = new Car("Impala");
var chevySilverado = new Truck("Silverado", "2020");
var wrangler = new Jeep("Wrangler", "2020", "Blue");

console.log("");

driveIt(impala);
driveIt(chevySilverado);
driveIt(wrangler);
//call output
console.log("\n --The following vehicles have been added to the racetrack --");
for (var x = 0; x < racetrack.length; x++) {
  console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}

// end program()
