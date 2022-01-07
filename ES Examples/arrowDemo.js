// array of some elements
items = [1, 2, 3, 4];

// iterating and generating new array multiplying each item by 2
multiplesOf2 = items.map(function(element, index){
    document.write(element+": "+index+"<br/>");
    return element * 2;
});

document.write("Multiples of 2: "+multiplesOf2+"<br/>");

// arrow function as a replaced to the callback function using => 
multiplesOf3 = items.map((element, index) => {
    return element * 3;
});

document.write("Multiples of 3: "+multiplesOf3+"<br/>");
// simplest way of writing arrow function
multiplesOf4 = items.map((element, index) => element * 4);

document.write("Multiples of 4: "+multiplesOf4+"<br/>");

