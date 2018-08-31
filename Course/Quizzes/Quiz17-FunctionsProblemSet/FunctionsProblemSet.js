function isEven(num) {
    if(num % 2 === 0) {
        return true
    }
    return false
}


function factorial(num) {
    var result = 1;
    for(var i=2; i<=num; i++) {
        result *=i;
    }
    return result;
}

var regex = /-/gi;
function kebabToSnake(str) {
    return str.replace(regex, "_");
}

// Prettier:
// function kebabToSnake(str) {
//     var newStr = str.replace(/-/gi, "_");
//     return newStr;
// }