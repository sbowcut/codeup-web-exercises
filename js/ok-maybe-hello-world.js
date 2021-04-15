"use strict";

// alert("I swear I won't make you see hello world'");
//
// alert("I hope my dogs don't get out again :/ ");

// MINI EXERCISE
// TODO: I demand a haiku! Using alert, write a haiku!
//     -> The entire poem consists of just three lines, with 17 syllables in total.
//     -> The first line is 5 syllables.
//     -> The second line is 7 syllables.
//     -> The third line is 5 syllables.
// alert("I do like coding");
//
// alert("Today is rather cloudy");
//
// alert("Covid vaccine sux");

// var userChoice = confirm("Would you like to continue?");
//
// if (userChoice) {
//     console.log("Let's continue");
// } else {
//     console.log("Alright, be like that then");
// }

//Prompt

 var userInput = prompt( "What is your favorite movie?").toUpperCase();

 if (userInput === "The Room".toUpperCase()) {
     alert("Oh, hi Mark.");
 }else{
     alert("You chose poorly.")
}
 alert(userInput);
