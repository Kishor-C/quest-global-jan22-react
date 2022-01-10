class Test {
    static x = 30;
    y = 40;
    static demo() {
        document.write(`<p>demo() is static</p>`);
        document.write(`<p>Static x = ${this.x}, non static y = ${this.y}</p>`);
    }
    hello() {
        document.write(`<p>hello() is non static</p>`);
        document.write(`Static x = ${this.x}, non static y = ${this.y}</p>`);
    }
}
Test.demo();
let t1 = new Test();
let t2 = new Test();
t1.y = 50;
t2.y = 60;
t1.hello();
t2.hello();