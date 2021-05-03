"use strict";
// function getSquare(x){
//     if (x === null){
//         return false;
//     }else if (typeof parseInt(x) === "number"){
//         return x * x;
//     }else{
//         return false;
//     }
// }
function getSquare(x){
    if(isNaN(Number(x))|| x === null) {
        return false;
    }else{
        return Math.pow(x, 2)
    }
}

function getReverse(string){
    if (typeof string === "string" ){
        return string.split("").reverse().join("");
    }else{
        return false;
    }
}
function multiplySquares(num1, num2){
    if (typeof parseInt(num1) === "number" && typeof parseInt(num2) === "number"){
            return getSquare(num1) * getSquare(num2);
        }else{
            return false;
    }
}
function addTo(x){
    if (x === null){
        return false;
    }else if (typeof parseInt(x) === "number"){
        return parseInt(x) + 3
    }else{
        return false;
    }
}
function subtractFrom(x){
    if (x === null){
        return false;
    }else if (typeof parseInt(x) === "number"){
        return parseInt(x) - 3
    }else{
        return false;
    }
}
function getLowestNumber(num1, num2, num3){
    if (num1 && num2 && num3 === null){
        return false;
    }else if (typeof parseInt(num1) === "number" && typeof parseInt(num2) === "number" &&
        typeof parseInt(num1) === "number"){
    return Math.min(num1, num2, num3);
    }else{
    return false
    }
}

console.log(getSquare('3'));
console.log(getReverse("stop asking me questions"));
console.log(multiplySquares(5, 5));
console.log(addTo(null));
console.log(subtractFrom(null));
console.log(getLowestNumber(1,2,'3'))