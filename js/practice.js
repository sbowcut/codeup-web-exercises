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

// function remainder(number, divisor){
//     if(typeof parseInt(number) === "number" && typeof parseInt(divisor) === "number"){
//         return parseInt(number) % parseInt(divisor);
//     }else if(typeof number != 'number'){
//         return console.log(`${number} is not a number!`)
//     }else if(typeof divisor != "number"){
//         return console.log(`${divisor} is not a number!`)
//     }
// }

// console.log(remainder('10',7))

// function pattern(x){
//     var number = '';
//     for (var i = 1; i < 10; i++){
//         console.log(number += i);
//     }
// }
// pattern(10);
// for (let i = 0; i < 10; i++) {
//     let output = '';
//     for(let j = 1; j <= i; j++) {
//         output +=i;
//     }
//     console.log(output);
// }
// for(let i = 1; i <= 5; i++){
//     console.log("* ".toString().repeat(i));
// }

// function secondToLast(arr){
//     return typeof arr[arr.length - 2];
// }
// var fruit = ["apple", "orange", "pineapple", "walnut", "dog", "hamburger"]
// console.log(secondToLast(fruit));
// function showTime(){
//     let dateTime = new Date();
//     let Time = dateTime.toLocaleTimeString();
// }
// const showTime = () => {
//     let dateTime = new Date();
//     console.log(dateTime)
// }
// setTimeout(showTime, 6000);
//                                     ^This and this \/ are the same
// function showTime(){
//     let dateTime = new Date();
//     console.log(dateTime)
// }
// var abort = setTimeout(showTime, 6000);
// for(var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// var str = "How are you doing today?";
// var res = str.split(' ');
// console.log(res)
// var band = "The band"
// band.shred = function (){
//     console.log("Raaaaaaaa")
// }
// band.shred()
// function randomizer(length) {
//     var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var result = '';
//     for ( var i = 0; i < length.length; i++ ) {
//         result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//     }
//     return result;
// }

// console.log(randomizer('hello world'))


function spongebobMeme(str) {
    const words = str.split("");

    for (let i = 0; i < words.length; i++) {
        let random = Math.floor(Math.random() * 2) + 1;
        if (random === 1) {
            words[i] = words[i][0].toUpperCase();
        }else{
            words[i] = words[i][0].toLowerCase();
        }
    }
    return words.join("");
}

$(`#inputMain`)

function generate(){
   $(`#mainDiv`).append("h3", )
}
$("#submitMain").click(function (){
    $(`#mainDiv`).append("h3", "userData")
})
// console.log(spongebobMeme('hello world this is a test of the spongebob meme function'));
