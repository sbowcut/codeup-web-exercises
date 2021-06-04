"use strict";
// function addClick() {
//     document.getElementById("search")
//         .addEventListener("click", addToDiv);
// }
// addClick()
//
// function addToDiv() {
//     document.getElementById("post-container")
//         .appendChild(getText());
// }
// function getText(){
//     document.getElementById("input").value
// }
$(document).ready(function(){
    // console.log('document is ready')
    $("#search").click(function(e){
        e.preventDefault()
        // console.log('click')
        let str = $("#input").val()
        let para = document.createElement("p")
        para.innerText = str
        // console.log(para)
        document.getElementById("post-container")
            .appendChild(para)
    });
});