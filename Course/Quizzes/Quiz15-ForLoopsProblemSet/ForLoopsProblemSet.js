// Print all number between -10 and 19
for(var one = -10; one <= 19; one++) {
    console.log(one);
}

// Print all even numbers between 10 and 40
for(var two = 10; two < 40; two++) {
    if(two % 2 === 0) {
        console.log(two);
        two++;
    }
}

// Print all odd numbers between 300 and 333
for(var three = 300; three < 333; three++) {
    if(three % 2 === 1) {
        console.log(three);
        three++;
    }
}

// Print all numbers divisible by 5 AND 3 between 5 and 50
for(var four = 5; four < 50; four++) {
    if(four % 5 === 0 && four % 3 === 0) {
        console.log(four);
    }
}