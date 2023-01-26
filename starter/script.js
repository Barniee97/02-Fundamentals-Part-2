"use strict";
function logger() {
    console.log("My name is Barniee");
}

//calling / running / invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5,0);
fruitProcessor(5,0);