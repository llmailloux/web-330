
/*
============================================
; Title: Assignment 2.2 
; Author: Laurie Mailloux  
; Date:   February 24, 2020
; Description: Prototypes
;===========================================

 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program
//header
const header = require("./Mailloux-header.js");

console.log(header.display("Laurie", "Mailloux", "Assignment 2.2"));

//new line
console.log("");

//variable
var person = 
{
    getAge: function ()
    {
        return this.getAge;
    }
};

var laurie = Object.create(person, {
    "age":
    {
        "value": "47"
    },
            "fullname":
    {
        "value": "Laurie Mailloux"
    }
  });
  laurie.getAge(); 

  console.log("The person's full name is '%s'", laurie.fullname,);
  console.log("This person's age is '%s'", laurie.age);



// end program

