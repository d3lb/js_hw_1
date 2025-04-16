"use strict";


// True or False 


//Task #1

if ("0"){
    alert("Hello") // This will alert because "0" as a string is true
}


//Task #2

let answer = prompt("What is the 'official' name of JavaScript?");

if (answer.toLowerCase() == "ecamscript") {
  alert("Correct!");
} else {
  alert("Don't know? ECMAScript!");
}


//Task #3

let score = 75
let grade;

grade = score >= 90? "A":
        score >= 80? "B":
        score >= 70? "C":
        score >= 60? "D":
        "F";

alert(grade);



//Task #4

let num = prompt("Type a number")

// while(isNaN(num)){ // or just asume its a number
//     num = prompt("Not a number, Type a number!");
// }

if (num > 0){
    alert(1);
}
else if (num < 0){
    alert(-1);
}
else{
    alert(0);
}


//Task #5

let result = a + b < 4? 'Not enough':'A lot';


//Task #6

let message = login == 'Employee' 
           || login == 'Director'? 'Hello':
              login == ''? 'No login' : '';


//Task #7

console.log(false || 'sdf'); // 'sdf'
console.log(false && ''); // false
console.log(true || ''); // true
console.log(true && ''); // ''
console.log(undefined || null); // null
console.log(undefined || 0 || null); // null
console.log(undefined && 0 && null); // undefined
console.log(1 || 0); // 1
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1