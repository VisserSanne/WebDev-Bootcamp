// Functions can be passed to other functions

// First define a function
function sing() {
    console.log("Twinkle twinkle...");
    console.log("How i wonder...");
}

// Set an interval if you want a function to repeat ever ... miliseconds
// setInterval(anotherFunc, interval)

// For example
setInterval(sing, 1000);
// If you run this piece of code you'll get a number. For example 2
// If you wanna stop the code you use "clearInterval(2);"

// You can also make a function in an interval
setInterval(
    function() {
        console.log("I am an anonymous function!");
        console.log("This is awesome!!");
    }, 2000)