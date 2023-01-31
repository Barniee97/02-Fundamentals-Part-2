"use strict";

/*
function logger() {
    console.log("My name is Barniee");
}

//calling / running / invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;   
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 6);
console.log(appleOrangeJuice);


function hoursSpentCoding(day, night) {
    const hours = `You spent ${day + night} hours coding today!`;
    return hours;
}

const dailyHours = hoursSpentCoding(2, 4);
console.log(dailyHours);

//Function declaration.
//calcAge1, foodProcessor, hoursSpentCoding are all function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1997);
console.log(age1);


//function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(2000);
console.log(age2);
 
*/



//Arrow functions

/*
 const calcAge3 = birthYear => 2023 - birthYear;
 const age3 = calcAge3(1995);
 console.log(age3);


 const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} will retire in ${retirement} years`
 }

 console.log(yearsUntilRetirement(1997, "Barnabas"));
 console.log(yearsUntilRetirement(1968, "Nathaniel"));
 */


//function calling another function

// function cutFruitPieces(fruit) {
//     return fruit * 3;
// }

//  function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of oranges.`;
//     return juice;   
// }

// console.log(fruitProcessor(2, 3));



//guava and pawpaw examples

// function cutFruitPieces(fruit) {
//     return fruit * 2;
// }

// function fruitProcessor(guava, pawpaw) {

//     const guavaPieces = cutFruitPieces(guava);
//     const pawpawPieces = cutFruitPieces(pawpaw);

//     const juice = `Juice with ${guavaPieces} piece of guava and ${pawpawPieces} piece of pawpaw`;
//     return juice;
// }

// console.log(fruitProcessor(4, 5));


//function declaration

// function fruitProcessor (apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

/*
// function declaration
function calcAge1 (birthYear) {
    const age = 2023 - birthYear;
    return age;
}

const age1 = calcAge1(1997);


//function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge2(1995);

console.log(age1, age2);
*/


// //arrow function
// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age2, age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1968, "Arah"));
// console.log(yearsUntilRetirement(2000, "Iye"));


/*

function cutFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${oranges} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

//function review

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} have ${retirement} years before retirement`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, "Onuh"));
console.log(yearsUntilRetirement(1950, "Buhari"));