"use strict";

//Task #1

let sum = 0, i = 0;

while(i <= 100){
    sum += i++;
}

console.log(sum);



//Task #2

let num;

do{
    num = prompt("Type a number!");
}
while(isNaN(num));678

console.log(num);



//Task #3

for (let i = 1; i <= 10; i++) {
    console.log(` 7 x ${i} = ${7*i}`);
}



//Task #4

const secret = 7;

for(;;){
    if(prompt("Pick a number 1 to 10") == secret){
        break;
    }
}
alert("Correct!");



//Task #5

for(let i = 1; i <= 30; i++){
    if(i % 3 == 0){
        continue;
    }
    console.log(i);
}



//Task #6

i = 3; //i already asigned in another task

while (i) { // 'i' starts with 3 which is true until 0 which is false
  alert( i-- ); 
}  //it goes 3, 2, 1. but doesn't alert the 0 because the loop doesn't work



//Task #7

i = 0; //i already asigned in another task
while(++i < 5) console.log(i); // logs 1 to 4

i = 0;
while(i++ < 5) console.log(i); // logs 1 to 5



//Task #8

for(let i = 0; i < 5; i++) console.log( i ); // logs 0 to 4

for(let i = 0; i < 5; ++i) console.log( i ); // logs 0 to 4

//because it does i + 1 after each loop not instantly



//Task #9

for(let i = 2; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}



//Task #10

i = 0; //i already asigned above

while (i < 3) {
    alert( `number ${i++}!` );
  }