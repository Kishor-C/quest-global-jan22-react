for(var x = 1; x <= 3; x++) {
    var y = 10;
    y = x * 10;
    document.write('<p>y = '+y+'</p>');
}
document.write('<p>outside the loop y: '+y+'</p>');
document.write('</p>global y: '+window.y+'</p>');