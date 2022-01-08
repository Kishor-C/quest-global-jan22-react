//From ES6 onwards you can use class

class Person {
    constructor(name, age) {
     this.name = name;
     this.age = age;   
    }
    display() {
      document.write("<p>Name:"+this.name+", Age: "+this.age+"</p>");  
    }
}
let p1 = new Person("Bruce", 42);
let p2 = new Person("Charles", 22);
p1.display();
p2.display();