// This piece of code does 40 - 10, so the outcome is 30
function test(x,y) {
    return y - x;
}

test(10, 40);

// This does 40*2 = 80, and because it's a return statement it stops
function testTwo(x) {
    return x*2;
    console.log(x);
    return x/2;
}

test(40);