/*
============================================
; Title: Assignment 3.2
; Author: Laurie Mailloux  
; Date:   March 3, 2020
; Description: The Factory Pattern
;===========================================


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program

//header
const header = require("./Mailloux-header.js");

console.log(header.display("Laurie", "Mailloux", "Assignment 3.2"));

//new line
console.log("");

//postgres class
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

//MySql class
function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

//Oracle database class
function Oracle(properties){
    this.username = properties.username || 'admin'; 
    this.password = properties.password || 'ca=s3cret';
    this.server = properties.server || 'localhost:5454';
    this.version = properties.version || '10g'
} 

//Informix database class
function Informix(properties){
    this.username = properties.username || 'admin';
    this.password = properties.password || 'ca-s3cret';
    this.server = properties.server || 'localhost:3030';
   
}

//create databaseFactory empty constructor
function DatabaseFactory() {}

//set prototype default database class to mySql
DatabaseFactory.prototype.databaseClass = MySql;

//define createDatabase protoype 
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === "MySql"){
        this.databaseClass = MySql;
    }

    if(properties.databaseType === "Oracle"){
        this.databaseClass = Oracle;
    }
    if(properties.databaseType === "Informix"){
        this.databaseClass = Informix;
    }
    return new this.databaseClass(properties);
};

//postgres factory and database prototype
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

//mySql factory and database prototype
var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

//oracle factory and database prototype
var oracleFactory = new DatabaseFactory()
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "admin",
    password: "admin"
});

//informix factory and database prototype
var informixFactory = new DatabaseFactory()
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "admin",
    password: "password"
});

//output 
console.log(oracle);
console.log(informix);



// end program
