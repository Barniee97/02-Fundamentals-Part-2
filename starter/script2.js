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
console.log(friends[friends.length - 1]);

//to replace element in the array
friends[0] = "Mamamiyaa";
console.log(friends);

const firstName = "Chioma"
const chioma = [firstName, "Augustine", 2023 - 1997, "Customer care rep", friends];
console.log(chioma);
console.log(chioma.length);

// Exercise
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

/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) �
GOOD LUCK 
*/

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20; 
// }
// //console.log(calcTip(100));

// const bills = [122, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
// console.log(totals);



// Object - a key for the values.
/*
const barniee = {
    firstName: "Barniee",
    lastName: "Arah",
    age: 2023 - 1997,
    job: "Frontend developer",
    friends: ["Toph", "Chi", "Derik"]
};
console.log(barniee);


// how to retrieve the data in an object
// 1. Dot notation
console.log(barniee.firstName);

// 2. Bracket Notation
console.log(barniee["age"]);

const nameKey = "Name";
console.log(barniee["last" + nameKey]); //Barniee
console.log(barniee["first" + nameKey]); //Arah

const interestedIn = prompt("What do you want to know about Barniee? Choose between firstName, lastName, age, job, and friends");



if(barniee[interestedIn]) {
    console.log(barniee[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

//to add new properties to the object

barniee.location = "Gbagada";
barniee["Github"] = "barniee97";  
console.log(barniee);

//challenge
//"Barniee has 3 friends, and his best friend is called Derik"

console.log(`${barniee.firstName} has ${barniee.friends.length} friends, and his best friend is called ${barniee.friends[2]}`);


*/
/*
const barniee = {
    firstName: "Barniee",
    lastName: "Arah",
    birthYear: 1997,
    job: "Frontend developer",
    friends: ["Toph", "Chi", "Derik"],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2023 - birthYear;
    // }

//     calcAge: function() {
//         // console.log(this);
//         return 2023 - this.birthYear;
//     }

    calcAge: function() {
        this.age = 2023 - this.birthYear;
        return this.age;
    },
//Barniee is a 26year old frontend developer, and he has a drivers licensce

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense? "a":"no"} driver's license`;
    }

    
};


console.log(barniee.calcAge());

console.log(barniee.age);
console.log(barniee.age);
console.log(barniee.age);
console.log(barniee.age);




console.log(barniee.getSummary());
*/


//ITERATION: THE FOR LOOP

// console.log("lifting weight repetition 1");
// console.log("lifting weight repetition 2");
// console.log("lifting weight repetition 3");
// console.log("lifting weight repetition 4");
// console.log("lifting weight repetition 5");
// console.log("lifting weight repetition 6");
// console.log("lifting weight repetition 7");
// console.log("lifting weight repetition 8");
// console.log("lifting weight repetition 9");
// console.log("lifting weight repetition 10");


//for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 30; rep++) {
//     console.log(`lifting weight repetition ${rep}`);  
// }


const barniee = [
    "Barniee",
    "Arah",
    2023 - 1997,
    "web-developer",
    ["Derik", "Chioma", "Isreal"]
];

// console.log(barniee[0])
// console.log(barniee[1])
// console.log(barniee[2])
// ...
// console.log(barniee[4])
// console.log(barniee[5]) does not exist

for(let i = 0; i < ; i++) {
    console.log(barniee[i]);
}