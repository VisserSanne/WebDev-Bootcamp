// This code prints all the uneven(odd) numbers from 1 to 9
var num = 1;

while(num <= 10) {
    console.log(num);
    num += 2;
}

// This code print out every number that can be devided by 4 evenly (so 4, 8, 12, 16 and 20)
var num = 1;

while(num <= 20) {
    if(num % 4 === 0) {
        console.log(num);
    }
    num++;
}

// This code is an infite loop, in the log it adds 1 to the actual number and for the next round it takes one off
var num = 100;

while(num < 150) {
    console.log(num + 1);
    num--;
}