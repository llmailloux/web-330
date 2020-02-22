/*
============================================
; Title: Assignment 1.3 
; Author: Laurie Mailloux  
; Date:   February 18, 2020
; Description: Class Refresher
;===========================================

Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

   -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/

//start program

//header
const header = require("./Mailloux-header.js");

console.log(header.display("Laurie", "Mailloux", "Assignment 1.3"));

//new line
console.log("");

console.log("--DISPLAYING CELL PHONE DETAILS--");

function CellPhone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  //get the price
  this.getPrice = function() {
    return this.price;
  };
  this.getModel = function() {
    return this.model;
  };
  this.getDetails = function() {
    return (
      "Manufacturer: " +
      this.manufacturer +
      "\nModel: " +
      this.getModel() +
      "\nColor: " +
      this.color +
      "\nPrice: " +
      this.getPrice()
    );
  };
}
var cellPhone = new CellPhone(
  "Apple",
  "IPhone 11 Pro Max",
  "Space Grey",
  "999.99"
);
console.log(cellPhone.getDetails());

// end program()
