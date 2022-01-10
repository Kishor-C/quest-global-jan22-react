let emp = {name : "Alexandar", age : 35};

document.write(`<p>Object values: ${Object.values(emp)}</p>`);
document.write(`<p>Object entries: ${Object.entries(emp)}</p>`);

for(let [k, v] of Object.entries(emp)) {
    document.write(`<p>${k}: ${v}</p>`);
}