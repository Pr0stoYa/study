var arr = [10,11,13,14,15,16,17,18,19];
 
function foo(value) {
    var sum = Math.pow(value,2);
    return document.write(sum + "<br>");
}
arr.forEach(foo,arr);