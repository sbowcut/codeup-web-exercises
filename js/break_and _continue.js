// var ranNum = (Math.floor(Math.random() * 50) + 1);
// function choseANumber(number){
//     var numberChosen = prompt("Chose an odd number between 1 and 50.")
//     var number = numberChosen
// }
var numberChosen = prompt("Chose an odd number between 1 and 50.")
while ((numberChosen <= 0) || (numberChosen > 50)) {
    alert("That's not a number between 1 and 50, try again.")
    prompt("Chose an odd number between 1 and 50.")
    if ((numberChosen >= 1) || (numberChosen <= 50)) {
        break;
    }
}

// while ((numberChosen >= 1) || (numberChosen <= 50)){
//     alert ("You chose " + numberChosen)
//
// }