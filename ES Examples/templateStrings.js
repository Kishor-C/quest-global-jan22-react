var employees = [{name : "Alex", age : 35}, {name : "Bruce", age : 45}];
var fruits = ["Apple", "Orange", "Mango"];
document.write(`<table border = '1'><tr><th>Name</th><th>Age</th>`);
for(var i = 0; i < employees.length; i++) {
    document.write(`<tr><td>${employees[i].name}</td><td>${employees[i].age}</td></tr>`);
}
document.write(`</table>`);
document.write("-------------");
document.write(`<ol>`);
for(var i = 0; i < fruits.length; i++) {
    document.write(`<li>${fruits[i]}</li>`);
}
document.write("</ol>");
// http://dev.api.com/employees/id/name/salary
var id = 100;
var ename = "Raj";
var salary = 35000;
// before ES6
var url1 = "http://dev.api.com/employees/"+id+"/"+ename+"/"+salary;
document.write("Url: "+url1);
var url2 = `http://dev.api.com/employees/${id}/${ename}/${salary}`;
document.write(`<p>Url2: ${url2}</p>`);