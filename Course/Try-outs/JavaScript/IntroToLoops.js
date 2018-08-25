// While loops will continue to run the code until it's true
// Example:
var numberCount = 1;

while(numberCount < 6) {
    console.log("count is: " + numberCount);
    numberCount++;            // This add's 1 to "count"
}
// This code starts at 1 and runs until the number isn't smaller than 6
// Short cut for "count = count + 2" = "count+=2"

// Another example
var str = "hello";
var count = 0;

while(count < str.length) {
    console.log(str[count]);
    count++;
}
// Outcome =
// "h"
// "e"
// "l"
// "l"
// "o"

// Infinite loop (do not use this)
// var infiniteCount = 0;
// while(infiniteCount < 10) {
//     console.log(infiniteCount);
// }