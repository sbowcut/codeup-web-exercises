alert("Welcome to my Website!")

var userInput = prompt("What is your favorite color?").toUpperCase();
{
    if (userInput === "Blue".toUpperCase()) {
        alert("Did we just become best friends?")
    }else{
        alert("That's pretty cool man, but my favorite color is better.")
        console.log("I don't like this guy...")
    }
}