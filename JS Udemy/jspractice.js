var firstName = 'Emma';

var age = 34;

if (age < 13) {
    console.log(firstName + ' is a kid.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young woman.');
} else if (age >= 30) {
    console.log(firstName + ' is a woman.');
}

/* The Ternary Operator and Switch Statements 
Ternary means there's 3 operants that interact 
with the operator */

var firstName = 'Emma';
var age = 34;

age >= 18 ? console.log(firstName + ' can have a drink.')
: console.log(firstName + ' must have juice.');

var drink = age >= 18 ? 'beer' : 'juice';


/* Truthy and Falsy values and equality operators */

// Falsy values: undefined, null, 0, '', NaN (not a number)
// Truthy values: anything NOT falsy

var height;

if (height) {
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined.');
}

var johnGame1=89;
var johnGame2=120;
var johnGame3=222;

var mikeGame1=144;
var mikeGame2=94;
var mikeGame3=123;

var johnAvg=(johnGame1 + johnGame2 + johnGame3) / 3;
var mikeAvg=(mikeGame1 + mikeGame2 + mikeGame3) / 3;
var maryAvg=(97 + 134 + 105) / 3;

console.log(johnAvg, mikeAvg, maryAvg);
/* when it was just Mike & John i wrote + instead of && and it worked, why? 
Why did it not work when I added Mary?
What is the downfall of the + sign? */
if (johnAvg > mikeAvg && johnAvg > maryAvg) {
    console.log('Johns team win with ' + johnAvg + ' points!');
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log('Mikes team win with ' + mikeAvg + ' points!');
} else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
    console.log('Marys team win with ' + maryAvg + ' points!');
} else {
    console.log('Its a draw');
}


