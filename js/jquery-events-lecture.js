(function () {
    // let jqElements = $('.jqClass');
    // let backgroundBlue = 'lightblue';
    // let backgroundReset = '';

    // function addClickEvents(elementsToBind, color1, color2) {
    //     let handlerBlueBckGnd = function () {
    //         elementsToBind.css('background-color', color1);
    //         $(this).css('background-color', color2);
    //     }
    //     elementsToBind.click(handlerBlueBckGnd);
    // }
    //
    // addClickEvents(jqElements, backgroundReset, backgroundBlue);
    // addClickEvents($(".card"), "", "blue");
    //make sure the DOM is loaded first
    // document.addEventListener("DOMContentLoaded", function() {
    //     addListeners();
    // });
    //parent method for adding all listeners
    // function addListeners(){
    //     get the elements to add listener and change image
    //     let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
    //     addEvents(cardContainers, 'images/jazz-music-rubber-duck.jpg', 'mouseover');
    //     addEvents(cardContainers, 'images/question.png', 'mouseout');
    // }
    $(".col-md-3").hover(function () {
        $(this).find(".img-fluid").attr("src", "images/jazz-music-rubber-duck.jpg")
    }, function () {
        $(this).find(".img-fluid").attr("src", "images/question.png")
    })
    $(`#submitBtn`).click(function () {
        $(`#override-bootstrap`).css("background-color", "red")
    })
    $(`.card-text`).click(function () {
        $(this).css("background-color", "red")
    })
    $(`#resetBtn`).click(function (){
        location.reload();
    })
    $(`#main-title`).click(function (){
        $(this).css("font-size", "400%")
    })
    //add mouseover/mouseout events to all selected elements
    // function addEvents(cardContainers, imgPath, listenerType){
    //     cardContainers.forEach((cc) => {
    //         let card = cc;
    //         //create listener which will call function change the image
    //         let listener = function (event) {
    //             let cardImg = card.querySelector(".card .card-img-top");
    //             changeImage(cardImg, imgPath);
    //         };
    //         cc.addEventListener(listenerType, listener);
    //     });
    // }
    // //actual function to swap images
    // function changeImage(card, imgPath){
    //     card.setAttribute('src', imgPath);
    // }
})();