"use strict";
// function cubeRoot(num){
// return Math.cbrt(num);
// }
// function cube(num){
//     return num * num * num
// }
//
// console.log(cube(3));
// console.log(cubeRoot(27));
// function returnLast(str){
//     return str.charAt(str.length-1)
// }

// console.log(returnLast("Hello World"));

function remainder(number, divisor){
    if(typeof parseInt(number) === "number" && typeof parseInt(divisor) === "number"){
        return parseInt(number) % parseInt(divisor);
    }else if(typeof number != 'number'){
        return console.log(`${number} is not a number!`)
    }else if(typeof divisor != "number"){
        return console.log(`${divisor} is not a number!`)
    }
}

console.log(remainder('10',7))