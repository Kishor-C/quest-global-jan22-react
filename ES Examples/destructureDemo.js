var items = [100, "Raj", 37];
// earlier you need to declare separate variables in separate line
var id = items[0];
var ename = items[1];
var salary = items[2];

document.write(`<p>Id = ${id}, Name = ${ename}, Salary = ${salary}</p>`);
// array destructure syntax
var [id1, ename1, salary1] = items;

document.write(`<p>Id1 = ${id1}, Name1 = ${ename1}, Salary1 = ${salary1}</p>`);

var products = {productId: 1, productName : "Laptop", price : 30000}
// Object destructure
var {productId, productName, price} = products;

document.write(`<p>Id = ${productId}, Name = ${productName}, Price = ${price}`);