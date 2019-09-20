var count = [0,1,2,3,4,5];
let countRed = document.querySelector(".red");
let buttonRedPlus = document.querySelector(".plusRed");
let buttonRedMinus = document.querySelector(".minusRed");
let countYellow = document.querySelector(".yellow");
let buttonYellowPlus = document.querySelector(".plusYellow");
let buttonYellowMinus = document.querySelector(".minusYellow");
let clickCountRed = 0;
let clickCountYellow = 0;

buttonRedPlus.onclick = function (click) {
    clickCountRed++;
    countRed.innerText = count[clickCountRed];
    return clickCountRed;
}

buttonYellowPlus.onclick = function(click) {
    clickCountYellow++;
    countYellow.innerText = count[clickCountYellow];
    return clickCountYellow;
}

buttonRedMinus.onclick = function(click) {
    clickCountRed--;
    countRed.innerText = count[clickCountRed];
    return clickCountRed;
}

buttonYellowMinus.onclick = function(click) {
    clickCountYellow--;
    countYellow.innerText = count[clickCountYellow];
    return clickCountYellow;
}
