"use strict";

document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.transform = "rotate(-15deg)";
document.getElementById("body").style.border = "2px red solid";
document.getElementById("mouth").style.borderRadius = "30px";
document.getElementById("mouth").style.backgroundColor = "pink";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("rightarm").style.backgroundColor = "green";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "15px black solid";
document.getElementById("nose").style.borderRadius = "50px";

let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

let leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);

let leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

let rightArm = document.getElementById("rightarm");
rightArm.addEventListener("click", moveUpDown2);

let mouth = document.getElementById("mouth");
mouth.addEventListener("click", moveRightLeft2);

let leftleg = document.getElementById("leftleg");
leftleg.addEventListener("click", moveLeftRight);


function moveUpDown(e) {
 let robotPart = e.target;
 let top = 0;
 let animation = setInterval(frame, 100);

 function frame() {
    robotPart.style.top  = top + "%";
    top++;
    if (top === 20) {
        clearInterval(animation);
    }

 }
}

function moveUpDown2(e) {
    let robotPart = e.target;
    let top = 0;
    let animation = setInterval(frame, 100);
   
    function frame() {
       robotPart.style.top  = top + "%";
       top++;
       if (top === 36) {
           clearInterval(animation);
       }
   
    }
   }



function moveRightLeft(e) {
    let robotPart = e.target;
    let left = 0;

    let animation = setInterval(frame,10);

    function frame() {
        robotPart.style.left = left + "%";
        left++;
        if (left === 70){
            clearInterval(animation);
            }
    }
}

function moveRightLeft2(e) {
    let robotPart = e.target;
    let left = 0;

    let animation = setInterval(frame,10);

    function frame() {
        robotPart.style.left = left + "%";
        left++;
        if (left === 20){
            clearInterval(animation);
            }
    }
}

function moveLeftRight(e) {
    let robotPart = e.target;
    let left = 100;

    let animation = setInterval(frame,100);

    function frame() {
        robotPart.style.left = left + "%";
        left--;
        if (left === 60){
            clearInterval(animation);
            }
    }
}

