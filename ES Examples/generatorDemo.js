function* test() {
    document.write(`<p>First statement</p>`);
    yield "Hello";
    document.write(`<p>Second statement</p>`);
    yield 20;
    document.write(`<p>Third statement</p>`);
    return "Welcome";
}
var g = test();
document.write(`<p>g = ${JSON.stringify(g.next())}</p>`);
document.write(`<p>g = ${JSON.stringify(g.next())}</p>`);
document.write(`<p>g = ${JSON.stringify(g.next())}</p>`);
document.write(`<p>g = ${JSON.stringify(g.next())}</p>`);
