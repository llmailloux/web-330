/*
============================================
; Title: Assignment 3.3
; Author: Laurie Mailloux  
; Date:   March 3, 2020
; Description: The Singleton Pattern
;===========================================

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

//header
const header = require("./Mailloux-header.js");

console.log(header.display("Laurie", "Mailloux", "Assignment 3.3"));

//new line
console.log("");

//database object
var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
       return instance;
    }
  };
})();

//test function compares both database objects and checks to see if they are the same
function DatabaseSingletonTest()
  {

    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s ", oracle === postgres);
  }

  //call test object
  DatabaseSingletonTest();

// end program
