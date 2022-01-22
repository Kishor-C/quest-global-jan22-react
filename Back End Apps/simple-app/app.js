// loading the express module
const express = require('express');
// calling the express function & referring to its instance
const app = express();
// load body parser to read request body 
const bodyParser = require("body-parser")
//load the cors module 
const cors = require('cors');
// create a port where your server wants to run 
const PORT = 9090;
// start the server in some port
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));

// adding the cors features to allow the client
app.use(cors({'origin': 'http://localhost:3000', 'methods' : ['POST', 'PUT', 'GET', 'DELETE']}));

// enable express to parse json
app.use(bodyParser.json())

// arrays that can store employee data
let emps = [];

//handling POST
app.post("/employee", (request, response) => {
    // reading the request content
    let employee = request.body;
    emps.push(employee); // store the data in the array
    response.status(201).json(employee);
});

//handling GET to return all the employees
app.get("/employee", (request, response) => {
    response.status(200).json(emps); 
});

//handling GET to return the employee based on id
app.get("/employee/:id", (request, response) => {
    // since the path data will be string we need to convert to number using parseInt
    let id = parseInt(request.params.id);
    let found = false;
    for(let i = 0; i < emps.length; i++) {
        if(id == emps[i].id) {
            found = true;
            response.status(200).json(emps[i]);
            break;
        }
    }
    if(!found) {
        response.status(404).json({"message":`Sorry employee with an id ${id} not found`})
    }
});

//handling DELETE to delete the employee based on id else return error message if id is not present
app.delete("/employee/:id", (request, response) => {
    let id = parseInt(request.params.id); 
    let found = false;
    let index = 0;
    for(let i = 0; i < emps.length; i++) {
        if(id == emps[i].id) {
            found = true;
            index = i;
            break;
        }
    }
    if(found) {
        emps.splice(index, 1);
        response.status(200).json({"message": `Employee with an id ${id} deleted`});
    } else {
        response.status(404).json({"message":`Sorry employee with an id ${id} not found`})
    }
});

//handling PUT to update the employee salary based on id
app.put("/employee/:id/:salary", (request, response) => {
    let id = parseInt(request.params.id); 
    let salary = parseFloat(request.params.salary);
    let found = false;
    let index = 0;
    for(let i = 0; i < emps.length; i++) {
        if(id == emps[i].id) {
            found = true;
            index = i;
            break;
        }
    }
    if(found) {
        emps[index].salary = salary;
        response.status(200).json({"message": `Employee with an id ${id} updated with the salary ${salary}`});
    } else {
        response.status(404).json({"message":`Sorry employee with an id ${id} not found`})
    }
});