"use strict";

// var num = 5;
// num = num + 5;
// console.log(num);

// Creating and interface for other code to use without knowing what happens inside add()
// function add(num1, num2, num3){ // <-- parameters here
//     return num1 + num2 + num3; //return gives back a value
// }
//
// console.log("The result of add() is: " + add(10, 10, 10)); // <-- arguments here
//
// function subtract(num1, num2){
//     return num1 - num2;
// }
//
// console.log("The result of subtract is: " subtract(5,4));

function multiply(num1, num2){
    return num1 * num2;
}

console.log(multiply(10, 5))

function divide(num1, num2){
    return num1 / num2;
}

console.log(divide(100, 10))