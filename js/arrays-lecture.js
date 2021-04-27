// var stuffAboutMe = ["I'm smart", "33", "short"]
// console.log(stuffAboutMe[0]);
// stuffAboutMe[1] = stuffAboutMe[1] + " years old."
// console.log(stuffAboutMe[1]);

//
// var myPets = ["Peanut", "Daisy", "Toby", "Lucy", "Jimmer"]
// // length = 5
// // maxIndex = 4
// for (let i = 0; i < myPets.length; i ++){
//     console.log(myPets[i]);
// }

//Mini Exercise

// TODO: MINI-EXERCISE
//  -> var days = ["Monday", "Tuesday", "Wednesday"];
//  -> Create an array with the remaining days of the week
//  -> Call .forEach() on that NEW array
//  -> Inside the inline function you pass into .forEach():
//      -> add the remainingDay of the week to the old array
//  -> When the loop completes, console.log() the completed day of the week array

var days = ["Monday", "Tuesday", "Wednesday"];
var remainingDays = ["Thursday", "Friday", "Saturday", "Sunday"];
remainingDays.forEach(function (day){
    days.push(day)
});
// console.log(days);

// TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array
function allTheDays(oldArray){
    var newArray = [];
    var oldArrayLength = oldArray.length;
    for (let i = 0; i < oldArray.length; i++){
        var removedDays = oldArray.pop();
        newArray.unshift(removedDays);
        // console.log(newArray);
        // console.log('Days left: ' + i);
        console.log(i);
        console.log(oldArray.length);
    }
}
allTheDays(days);
