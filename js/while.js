(function() {
    "use strict";

// var number = 2
// while (number < 65536){
//     console.log(number);
//     number = number * 2
// }


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let amountToSell = getRandomArbitrary(50,100);

do {
    let amountSelling =(Math.floor(Math.random() * 5) + 1)
    amountToSell = amountToSell - amountSelling
    console.log(`There are ${amountToSell} cones left for the day`);
} while (amountToSell > 0);

console.log("looks like we are out of cones.")


})()