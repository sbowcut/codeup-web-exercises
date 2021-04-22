// var numberOfCars = 0;
// do {
//     var numberOfParkingSpots = 30 - numberOfCars;
//     console.log(`There are ${numberOfParkingSpots} parking spots left`)
//     numberOfCars = numberOfCars + 2;
// } while (numberOfCars <= 30);
//
// console.log("Sorry, the lot is full.")
// function showMultiplicationTable(num1){
//     console.log(num1 * 1)
// }
// showMultiplicationTable(80);

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomArbitrary(50,100));