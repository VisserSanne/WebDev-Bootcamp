// An array is a data structure

// Example, i'd like to make a group of friends
var friend1 = "Charlie";
var friend2 = "Liz";
var friend3 = "David";
var friend4 = "Mattias";
// Exept this isn't really a group and there is a lot of repeated code
// So you could make the group like this
var friends = ["Charlie", "Liz", "David", "Mattias"];
// Every name has their own number, starting at 0

// If you wanna retrieve the data you can use their number
console.log(friends[0]);        // This prints "Charlie"
console.log(friends[1] + " <3 " + friends[2]);  // This prints "Liz <3 David"

// If "Charlie" wants to change his name to "Chuck" and "Liz" to "Lizzie"
friends[0] = "Chuck";
friends[1] = "Lizzie";

// If you wanna add another friend to your array you say the array name with an non existing number between the brackets
friends[4] = "Amelie";


//You can initialize an empty array two ways:
var one = [];
var two = new Array();
// Arrays can hold aly type of data
var random_collection = [49, true, "Hermione", null];
// Arrays have a length property
var nums = [45, 37, 89, 24];
nums.length         // = 4