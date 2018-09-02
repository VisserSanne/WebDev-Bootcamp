// Scope is the context that code is executed in

// Example
function doMath() {
    var x = 40;
    console.log(x);
}
// The function is a scope. Within doMath(); x is defined.
// In the so called Global Scope x isn't defined

// Now if you define x in the Global Scope

x = "Hello!";

// If recall x you'll get "Hello!", but if you run doMath you'll still get 40
// This is because the function scope is a child of the Global Scope

// If you would make another function
function doSomethingElse() {
    console.log(x);
}

// This will take the value of the Global Scope, so "Hello!"

// You can also change x within a function
function changeX() {
    x = "Goodbye!";
    console.log(x);
}

// Now if you would run changeX x will be changed to "Goodbye!"