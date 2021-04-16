"use strict";

function getKindOfDog(){
    return prompt("What kind of dog is it?");
}

console.log(getKindOfDog());

function getContactInfo(){
    return prompt("How do I contact you when I find the dog?");
}

console.log(getContactInfo());

function getDogName(){
    return prompt("What is your dogs name?");
}

console.log(getDogName());

function playTheGreatEscape(){
    var dogKind = getKindOfDog();
    var dogName = getDogName();
    var contactInfo = getContactInfo();

    alert("Time to search for this doggo!")
    alert("I see a dog!")
    var kindOfDogSeen = getKindOfDog();
    var isSameKindOfDog = kindOfDogSeen === dogKind;
    if (isSameKindOfDog && confirm("Does the dog respond to the name?")){
        alert:("The dogs are the same kind!");

    }
}

playTheGreatEscape();