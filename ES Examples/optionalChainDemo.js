let person1 = {
    name : "Alex", 
    isEmployed: function() {
        document.write(`<p>isEmployed() is called</p>`);
    }
}
let person2 = {
    name : "Bruce"
}
person1.isEmployed?.();
person2.isEmployed?.();
let user = [
    {name : "Alex", age : 35, address : {state : "KA", city : "BLR"}},
    {name : "Bruce", age : 40},
    {name : "Charles", age: 45, contact : {email:"charles@gmail.com", phone:999923393}}
];
// when user is iterated you need to check some properties exists in each iterations
// like address or contact else you get error

for(var v = 0; v < user.length; v++) {
    document.write(`<p>Name:${user[v]?.name}, Age:${user[v]?.age}`)
    document.write(`, State: ${user[v]?.address?.state}`);
    document.write(`, Email: ${user[v]?.contact?.email}`);
    document.write(`</p>`);
}