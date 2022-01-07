const employee = Object.freeze({name : "Raj", age : 35});

document.write("<p>name = "+employee.name+", age = "+employee.age+"</p>");

employee.name = 'Ajay';
employee.age = 44;

document.write("<p>name = "+employee.name+", age = "+employee.age+"</p>");

var x = 10;
document.write("<p>x = "+x+"</p>");
var x = 20;
document.write("<p>x = "+x+"</p>");
let y = 30;
document.write("<p>y = "+y+"</p>");
let y = 30; // throws error
document.write("<p>y = "+y+"</p>");
