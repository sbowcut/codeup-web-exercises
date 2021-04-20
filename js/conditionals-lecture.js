(function(){
    "use strict";

    // var hasCar;
    //
    // if (hasCar){
    //     console.log("Let's get in and go!")
    // }else{
    //     console.log("We ned to call Uber")
    // }
    function getToDestination(age, isInsured, hasCar){
        var isLicensed = age >= 16;
        var isLegalDriver = isLicensed && isInsured;

        if (isLegalDriver && hasCar){
            console.log("Let's get in and go!");
        }else if ((!isLegalDriver || !hasCar) && (canGetRideShare())){
            console.log("We need to call Uber!");
        }else{
            console.log("I think my friend can give us a ride")
        }
    }
        getToDestination(16, false, true);
        canGetRideShare(5,30)
    function canGetRideShare(nearbyDrivers, hasEnoughMoney){
        var enoughMoney = hasEnoughMoney;
        var driverClose = nearbyDrivers;
            if (enoughMoney){
            }






    }
)()