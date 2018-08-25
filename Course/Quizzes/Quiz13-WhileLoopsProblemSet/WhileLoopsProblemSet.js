var firstNum = -10;

while(firstNum < 20) {
    console.log("firstNum " + firstNum);
    firstNum++;
}

var secondNum = 10;

while(secondNum <= 40) {
    if(secondNum % 2 === 0) {
        console.log("secondNum " + secondNum);
        secondNum+=2;
    }
    else {
        secondNum++;
    }
}

var thirdNum = 300;

while(thirdNum <= 333) {
    if(thirdNum % 2 !== 0) {
        console.log("thirdNum " + thirdNum);
        thirdNum+=2;
    }
    else {
        thirdNum++;
    }
}

var fourthNum = 5;

while(fourthNum <= 50) {
    if((fourthNum % 5 === 0) && (fourthNum % 3 === 0)) {
        console.log("fourthNum " + fourthNum);
    }
    fourthNum++;
}