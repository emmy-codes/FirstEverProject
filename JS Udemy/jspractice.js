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


/******************************************
 * Functions
 */
// function, name of function, and argument(s)
 function calculateAge(birthYear) {
    return 2020 - birthYear;
 }

 var ageEmma = calculateAge(1986);
 var ageGranny = calculateAge(1940);
 var ageMum = calculateAge(1962);
 console.log(ageEmma, ageGranny, ageMum);

 function yearsUntilRetirement(year, firstName) {
     var age = calculateAge(year)
     var retirement = 70 - age;

     if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
     } else {
         console.log(firstName + ' is already retired.');
     }
 }

 yearsUntilRetirement(1986, 'Emma');
 yearsUntilRetirement(1940, 'Granny');
 yearsUntilRetirement(1962, 'Mum');

 /* Function declaration

 function whatDoYouDo(job, firstName);
 */ 

 // Function expression
var whatDoYouDo = function(job, firstName) {
 switch(job) {
     case 'teacher':
        return firstName + ' teaches kids how to code';
     case 'drver':
        return firstName + ' is the designated driver';
     case 'designer':
        return firstName + ' designs clothes in London';
     default:
         return firstName + ' has another job';
 }
}
 console.log(whatDoYouDo('teacher', 'John'));


 /*************************
  * Functions (again) are like containers that hold
  * some lines of code, which we can pass arguments into
  * which can then return a result
  */

// function - name of function - (argument)
function calculateAge(birthYear) { // birthyear is a variable inside the function
    return 2018 - birthYear;
}
/* a function is like a machine that receives input, uses
the data and returns something else/new */

var ageJohn = calculateAge(1990);
console.log(ageJohn);
/* we have defined the argument of birth year */
