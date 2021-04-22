(
    function(){
        "use strict";

        /* ########################################################################## */

        /**
         * TODO:
         * Create a function named `analyzeColor` that accepts a string that is a color
         * name as input. This function should return a message that related to that
         * color. Only worry about the colors defined below, if the color passed is not
         * one of the ones defined below, return a message that says so
         *
         * Example:
         *  > analyzeColor('blue') // returns "blue is the color of the sky"
         *  > analyzeColor('red') // returns "Strawberries are red"
         *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
         *
         * You should use an if-else-if-else block to return different messages.
         *
         * Test your function by passing various string literals to it and
         * console.logging the function's return value
         */
        // function analyzeColor(color){
        //     if (color === "red"){
        //         console.log("Strawberries are red")
        //     } else if (color === "blue") {
        //         console.log("blue is the color of the sky")
        //     } else if (color === "cyan"){
        //         console.log("I don't know anything about cyan")
        //     }else{
        //         console.log("I don't know that color, try again")
        //     }
        // }
        // analyzeColor(randomColor)
        //
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//
        /**
         * TODO:
         * Pass the `randomColor` variable to your function and console.log the results.
         * You should see a different message every time you refresh the page
         */

        /**
         * TODO:
         * Refactor your above function to use a switch-case statement
         */
        // function analyzeColor(color){
        //     var favoriteColor = prompt("What is your favorite color?");
        //
        //     switch(favoriteColor) {
        //         case "red":
        //             alert("Strawberries are red");
        //             break;
        //         case "blue":
        //             alert("blue is the color of the sky");
        //             break;
        //         case "cyan":
        //             alert("I don't know anything about cyan.");
        //             break;
        //         default:
        //             alert("I don't know that color, try again");
        //             break;
        //     }
        // }
        // analyzeColor()
        /**
         * TODO:
         * Prompt the user for a color when the page loads, and pass the input from the
         * user to your `analyzeColor` function. Alert the return value from your
         * function to show it to the user.
         */

        /* ########################################################################## */

        /**
         * TODO:
         * Suppose there's a promotion in Walmart, each customer is given a randomly
         * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
         * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
         * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
         * all for free!.
         *
         * Write a function named `calculateTotal` that accepts a lucky number and total
         * amount, and returns the discounted price.
         *
         * Example:
         * calculateTotal(0, 100) // returns 100
         * calculateTotal(4, 100) // returns 50
         * calculateTotal(5, 100) // returns 0
         *
         * Test your function by passing it various values and checking for the expected
         * return value.
         */
        // function calculateTotal(luckyNumber, total){
        //     if(luckyNumber === 0){
        //         return total - (total / 0);
        //     }else if(luckyNumber === 1){
        //         return total - (total * 0.10);
        //     }else if(luckyNumber === 2){
        //         return total - (total * 0.25);
        //     }else if(luckyNumber === 3){
        //         return total - (total * 0.35);
        //     }else if(luckyNumber === 4){
        //         return total - (total * 0.50);
        //     }else if(luckyNumber === 5){
        //         return total * 0;
        //     }else{
        //         console.log("Pick another number");
        //     }
        // }
        // console.log("Your total today is $" + calculateTotal(5, 100));
        /**
         * TODO:
         * Uncomment the line below to generate a random number between 0 and 6.
         * Prompt the user for their total bill, then use your `calculateTotal` function
         * and alerts to display to the user what their lucky number was, what their
         * price before the discount was, and what their price after the discount is.
         */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

        /**
         * TODO:
         * Write some JavaScript that uses a `confirm` dialog to ask the user if they
         * would like to enter a number. If they click 'Ok', prompt the user for a
         * number, then use 3 separate alerts to tell the user:
         *
         * - whether the number is even or odd
         * - what the number plus 100 is
         * - if the number is negative or positive
         *
         * if what the user enters is not a number, use an alert to tell them that, and
         * do *not* display any of the above information.
         *
         * Can you refactor your code to use functions?
         * HINT: The way we prompt for a value could be improved
         */
        function numberGame() {
            var choose = (confirm("Would you like to enter a number?"));
            if (choose === true) {
                var num = (prompt("What number are you thinking of?"));
                if (isNaN(num) === true){
                    alert("That is not an number! Refresh & Try again")
                }else {
                    if (num % 2 == 0) {
                        alert("Your number is even!");
                    } else {
                        alert("Your number is odd!");
                    }
                    alert("Your number +100 is: " + (parseInt(num, 10) + 100));
                    if (num > 0) {
                        alert("Your number is positive!");
                    } else if(num<0){
                        alert("Your number is negative!");
                    }else{
                        alert("Your number is neither positive nor negative!")
                    }
                }
            }
        }
        numberGame();
    }
)()