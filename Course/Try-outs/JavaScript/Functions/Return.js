// The difference between return and console.log is that you can caputer the value when you return it. With console.log you can't
// Example
function square(x) {
    return x * x;
}

// You can only return 1 return statement within a function. You could use one in an if statement and one in an else statement, but only one of them is going to run

// We use the return keyword to outpyt a value from a function

function capitalize(str) {
    if(typeof str !== "string") {
        return "That's not a string!"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";     // paris
capitalize(city);       // Paris


// Another way to define a function called function expression
var capitalize = function() {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// You'll have to use the (); as well. So capitalize();
// Once you give the variable a different value the function is lost