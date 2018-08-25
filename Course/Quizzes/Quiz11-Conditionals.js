// First of all, start with making a variable
var age = number(prompt("What is your age?"));

// If age is negative, print an error message
if(age < 0) {
    console.log("Error! This isn't a possibility!");
}

// If age is 21, print "Happy 21st birthday!!"
if(age === 21) {
    console.log("Happy 21st birthday!!")
}

// If age is odd, print "Your age is odd!!"
if(age % 2 !== 0) {
    console.log("Your age is odd!!");
}

// If age is a perfect square, print "Perfect square!"
if(age % Math.sqrt(age) === 0) {
    console.log("Perfect square!");
}