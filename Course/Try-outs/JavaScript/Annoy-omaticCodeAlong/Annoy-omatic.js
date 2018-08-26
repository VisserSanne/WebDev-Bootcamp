var arrival = prompt("Are we there yet?");

while(arrival !== "yes" && arrival !== "yeah"){
    var arrival = prompt("Are we there yet?");
}

alert("Yay, we finally made it!!");

// Version 2, the ".indexOf" usually shows the number a letter occurs at or a word starts at
// In this case if a word or letter isn't in the string the number is -1, you could also use this in your advantage

// var arrival = prompt("Are we there yet?");

// while(arrival.indexOf("yes") === -1){
//     var arrival = prompt("Are we there yet?");
// }

// alert("Yay, we finally made it!!");