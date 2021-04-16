"use strict"

// var a = 1;
// var b = a++;
// var c = ++a;
//
// console.log(a);

// var d = "hello";
// var e = false;
//
// console.log(d++);
// console.log(e++);


// var perplexed; // perplexed is undefined (no value is assigned)
// perplexed + 2;

// console.log(perplexed + 2); // NaN

// var price = 2.7;
// price = price.toFixed(2);
// console.log(price); // 2.70

// var price = "2.7";
// price = price.toFixed(2);
// console.log(price); // not a function

// console.log(isNaN(0)); //false
//
// console.log(isNaN(1)); //false
//
// console.log(isNaN("")); //false -> empty string = falsy = false = 0
//
// console.log(isNaN("string")); //true
//
// console.log(isNaN("0")); //false
//
// console.log(isNaN("1")); //false
//
// console.log(isNaN("3.145")); //false
//
// console.log(isNaN(Number.MAX_VALUE)); //false
//
// console.log(isNaN(Infinity)); //false
//
// console.log(isNaN("true")); //true
//
// console.log(isNaN(true)); //false
//
// console.log(isNaN("false")); //true
//
// console.log(isNaN(false)); //false

// console.log(!true); //false
//
// console.log(!false); //true
//
// console.log(!!true); //true
//
// console.log(!!false); //false
//
// console.log(!!0); //false
//
// console.log(!!-0); //false
//
// console.log(!!1); //false
//
// console.log(!!-1); //true!!!!!!!!!!
//
// console.log(!!0.1); //true
//
// console.log(!!"hello"); //true
//
// console.log(!!""); //false
//
// console.log(!!''); //false
//
// console.log(!!"false"); //true
//
// console.log(!!"0"); //true

// var sample = "Hello Codeup";
// console.log(sample.length);
// sample = sample.toUpperCase();
// sample = sample.toLowerCase();
// sample = (sample + " Students");
// var str1 = " students";
// var mix = sample.concat(str1);
// console.log(mix);
// console.log(sample.indexOf("c")); //
// var sample2 = sample.substr(6,12);
// console.log(sample2);

// var moviePrice = 3;
// var bearMovie = (moviePrice * 5);
// var mermaidMovie = (moviePrice * 3);
// var herculesMovie = (moviePrice * 1);
// var totalPrice = (bearMovie + mermaidMovie + herculesMovie);
// console.log(totalPrice);

// var google = (400 * 6);
// var amazon = (380 * 10);
// var facebook = (350 * 4);
// var totalPay = facebook + amazon + google;
// console.log(totalPay);

// var studentEnrollment = (classFull && noClassConflict);
//
// var productOffer = premiumAccount || (moreThan2Items && offerValid);

// var username = 'codeup';
// var password = 'notastrongpassword';
//
// var atLeast5 = password.length >= 5;
// var noUsername = !password.includes(username);
// var lessThan20Char = password.length <= 20;
// var noWhitespace = (username[0] !== " " && username[-1] !== " " && password[0] !== " " && password[-1] !== " ");