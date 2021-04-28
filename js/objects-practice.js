// var aboutMe = {
//     state: "Utah",
//     name: "Sam",
//     status: "very attractive",
//     age: "33"
// }
// var theJazz = new Object();
// theJazz.coach = "Quin";
// console.log(theJazz)

// var daMavs = {};
// TODO: create an empty 'yourFaveSportsTeam' object using object literals
// TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
// yourFavoriteSportsTeam = {
//     city: "Salt Lake City",
//     coach: "Quin Snyder",
//     sport: "Basketballz",
//     team: "Da Jazz",
//     bestPlayers: [
//         {
//             name: "Bob",
//             age: 8,
//             mvp: 3
//         },
//         {
//             name: "Billy",
//             age: 68,
//             mvp: 0
//         },
//         {
//           name: "Julie",
//           age: "27",
//           mvp: true
//         }
//     ]
// }
// yourFavoriteSportsTeam["numOfPlayers"] = 17
// yourFavoriteSportsTeam["numOfChampsWon"] = 0
// yourFavoriteSportsTeam["isBestTeam"] = false
// console.log(yourFavoriteSportsTeam);
//
// console.log(yourFavoriteSportsTeam.city);
//
// console.log(yourFavoriteSportsTeam["coach"]);
//
// console.log(yourFavoriteSportsTeam.bestPlayers[0].age)

// var laptop = {
//     color: 'space grey',
//     make: "mac",
//     size: 13,
//     shutdown: function (){
//         return "laptop is shutting down";
//     }
// }
// console.log(laptop.shutdown());
// laptop.turnOn = function turnOn (){
//     return "laptop is now starting";
// }
// console.log(laptop.turnOn());
// console.log(laptop);

// var laptop = {
//     color: 'space grey',
//     make: "mac",
//     size: 13,
//     whatSize: function (){
//         return "A laptop is " + laptop.size;
//     }
// }
// console.log(laptop.whatSize())

// var theSpurs = {
//     city: "SA",
//     coach: 'gregg',
//     wins: 5,
//     players: ["one", "two", "tim duncan", "manu", "david robinson"],
//     playerInfo: [
//         {
//             name: "Tim",
//             age: 40,
//             mvp: 3
//         },
//         {
//             name: "manu",
//             age: 38,
//             mvp: 6
//         }
//     ],
//     otherNBATeams: {
//         Jazz: {
//             city: "Salt Lake City",
//             mascot: "Jazz Bear",
//             champsWon: 0
//         },
//         Mavs: {
//             city: "Dallas",
//             mascot: "MavsMan & Champ",
//             champsWon: 1
//         },
//         Pistons: {
//             city: "Detroit",
//             mascot: "Hooper the Horse",
//             champsWon: 3
//         }
//     }
// }
//
// // console.log(theSpurs.playerInfo[0].age);
// // console.log(theSpurs);
// // TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
// //  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
// //  'otherNBATeam' team object.
// console.log(theSpurs.otherNBATeams.Mavs.mascot);
// console.log(theSpurs.otherNBATeams.Jazz.mascot);
// console.log(theSpurs.otherNBATeams.Pistons.mascot);
// console.log(theSpurs.players[2]);
// theSpurs.playerInfo[1].name = "Ginobli";
// theSpurs.otherNBATeams.Bulls = {
//     city: 'Chicago',
//     mascot: 'Bull',
//     champsWon: 'Many'
// }
/** Mini Exercises */
/*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
      isOpen, ranking, yearOpened), as
      well as, information about at least 5 different animals (think nested objects). For each
      Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
       livingPlace). Each animal must also contain a method that returns the sound of that
        animal using the THIS keyword.
       hint: Each animal should have at least 5 properties (one of them being animalSound);
*/
// var zoo = {
//     name: "Philadelphia Zoo",
//     city: "Philadelphia",
//     isOpen: true,
//     ranking: "Largest zoo in the US",
//     yearOpened: "1874",
//     animals: {
//         elephant: {
//             hasFur: false,
//             isMammal: true,
//             canSwim: true
//         },
//         tiger: {
//             hasFur: true,
//             isMammal: true,
//             canSwim: true
//         },
//         platypus: {
//             hasFur: true,
//             isMammal: true,
//             canSwim: true
//         },
//         rhino: {
//             hasFur: false,
//             isMammal: true,
//             canSwim: false
//         },
//         Bear: {
//             hasFur: true,
//             isMammal: true,
//             canSwim: true
//         }
//
//     }
// }
// var getRandom = Math.floor(Math.random() * (40 - 20 + 1) + 20);
// console.log(getRandom);
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// console.log(getRandomInt(20, 40));
// for exercises Math.pi and Math.E (Euler's number)
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}
console.log(removeVowels("Hello my name is Sam"))