for(var x = 1; x <= 3; x++) {
    let y = 10;
    y = y * x;
    document.write("<p>y = "+y+"</p>");
}
document.write("<p>y inside window: "+window.y+"</p>");
document.write("<p>y outside loop: "+y+"</p>");