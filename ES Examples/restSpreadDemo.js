function sum(a, ...b) {
    document.write(`<p>a = ${a}, b = ${b}</p>`);
    var result = a;
    for(var x = 0; x < b.length; x++) {
        result = result + b[x];
    }
    document.write(`<p>Result = ${result}</p>`)
}
function add(x, y, z) {
    document.write(`<p>x = ${x}, y = ${y}, z = ${z}</p>`);
}
function test(a, b, ...c) {
    document.write(`<p>a = ${a}, b = ${b}, c = ${c}</p>`);
}
sum(4, 1, 3, 5);
var items = [8,7,6];
add(...items);
var arr = [5, 3, 1, 2, 10];
test(...arr);