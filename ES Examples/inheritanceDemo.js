class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        document.write("<p>Employee id = "+this.id+", name = "+this.name+"</p>");
    }
}
// you can achieve inheritance using extends keyword
class Manager extends Employee {
    constructor(id, name, employeeCount) {
        super(id, name);
        this.employeeCount = employeeCount;
    }
    printAllInfo() {
        document.write("<p>Manager id = "+this.id+", name = "+this.name
            +", Count = "+this.employeeCount+"</p>");
    }
}
var m = new Manager(10, "Raj", 250);
m.display(); // call inherited method
m.printAllInfo();