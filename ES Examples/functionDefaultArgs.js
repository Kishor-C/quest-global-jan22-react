function add(x = 1, y = 0) {
    document.write("<p>x = "+x+", y = "+y+"</p>");
    var result = x + y;
    document.write("<p>Result = "+result+"</p>");
}
function loop(start = 0, end = 1, step = 1) {
    for(var i = start; i < end; i = i + step) {
        document.write("<p>i = "+i+"</p>");
    }
}
add(20, 30);
document.write("-----------------");
add(20);
document.write("-----------------");
add();
loop();
document.write("-----------------");
loop(0, 5, 2)