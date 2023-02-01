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
/*
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
*/

//Arrays

/*
const friend1 = "Chiwiem";
const friend2 = "Daniel";
const friend3 = "Iye";
const friend4 = "Ojoka";

const friends = ["Chiewiem", "Daniel", "Iye"];
console.log(friends);


// const years = new Array(1991, 1992, 1993, 1994);
// console.log(years);


console.log(friends[0]);
console.log(friends[2]);


//to get the legth of the array
console.log(friends.length);

//to get the last element of any array
console.log(friends[friends.length -1]);

//to replace element in the array
friends[0] = "Mamamiyaa";
console.log(friends);

const firstName = "Chioma"
const chioma = [firstName, "Augustine", 2023 - 1997, "Customer care rep", friends];
console.log(chioma);
console.log(chioma.length);


const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
const years = [1998, 1967, 2002, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);


const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

*/

/*
//array methods

//push - adds element to the end of the array
const friends = ["Chiewiem", "Daniel", "Iye"];
const newLength = friends.push("mamamiyaa");//to add an element and get the new length of the array
console.log(friends);
console.log(newLength);

//unshift - adds element to the beginning of the array
friends.unshift("Tata");
console.log(friends);

//pop - to remove the last element from an array
friends.pop();
friends.pop();
console.log(friends);

//shift - to remove element from the beginning of an array
friends.shift();
console.log(friends);

//indexOf - tells us the position of an eelement in an array
console.log(friends.indexOf("Chiewiem"));

//includes - to check if the element is in the array
console.log(friends.includes("Chiewiem"));

*/