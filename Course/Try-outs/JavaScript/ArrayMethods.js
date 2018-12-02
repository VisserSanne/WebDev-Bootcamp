// push/pop
// You use push to add something to the end of an array
var colors = ["red", "orange", "yellow"];
colors.push("green");
colors      // ["red", "orange", "yellow", green]
// Use pop to remove the last item in an array
var colors = ["red", "orange", "yellow"];
colors.pop();
colors      // ["red", "orange"]
// pop() returns the removed element
var col = colors.pop();     // orange
// Now if you would type "colors" again it will return ["red"]

// shift/unshift
// With shift you add or remove (unshift) the first item in an array
var numbers = ["0", "1", "2"];
colors.shift();     // ["1", "2"]
// unshift
var num = colors.shift();       // ["2"]

// With indexOf you can find the index of an item in an array
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"]
friends.indexOf("David");   // 2
friends.indexOf("Liz");     // 1 (It picks the first Liz, so only 1 not 4)
friends.indexOf("Hagrid");  // -1 (Hagrid isn't part of the string, so when it returns -1 it's not present)

// with slice you can copy parts of an array
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// Use slice to copy the second and third fruits
var citrus = fruits.slice(1, 3);    // var citrus = ['Orange', 'Lemon']; var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// You type 1 and three because you start the slice at the beginning of 1 and end it at the beginning of 3 (so it excludes that)

// If you wanna copy the entire string you could do
var nums = [1, 2, 3];
var otherNums = nums.slice();
// They both return [1, 2, 3];