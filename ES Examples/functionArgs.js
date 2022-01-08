function add(x, y) {
    x = typeof x != 'undefined' ? x : 0;
    y = typeof y != 'undefined' ? y : 0;
    document.write("<p>x = "+x+", y = "+y+"</p>");
    var result = x + y;
    document.write("<p>Result = "+result+"</p>");
}

add(20, 30);
document.write("-----------------");
add(20);
document.write("-----------------");
add();
