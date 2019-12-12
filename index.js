var count = [0,1,2,3,4,5];
let countRed = document.querySelector(".red");
let buttonRedPlus = document.querySelector(".plusRed");
let buttonRedMinus = document.querySelector(".minusRed");
let countYellow = document.querySelector(".yellow");
let buttonYellowPlus = document.querySelector(".plusYellow");
let buttonYellowMinus = document.querySelector(".minusYellow");
let start = document.querySelector(".start");
let timerDisable= document.querySelector(".timerDisable");
let removeTimer = document.querySelector(".remove");
let tenSec = document.querySelector(".tenSec");
let clickCountRed = 0;
let clickCountYellow = 0;
let timing = 30;
let intervalID;
let fals = "!!!";
let pause = false;

document.addEventListener("DOMContentLoaded", function() {
  timerDisable.innerText = timing;
});

buttonRedPlus.onclick = function () {
  if(clickCountRed >=0 && clickCountRed < 5) {
    clickCountRed++;
    countRed.innerText = count[clickCountRed];
  }
}

buttonYellowPlus.onclick = function(click) {
  if(clickCountYellow >=0 && clickCountYellow < 5) {
    clickCountYellow++;
    countYellow.innerText = count[clickCountYellow];
  }
}

buttonRedMinus.onclick = function(click) {
  if(clickCountRed > 0 && clickCountRed <= 5) {
    clickCountRed--;
    countRed.innerText = count[clickCountRed];
  }
}

buttonYellowMinus.onclick = function(click) {
  if(clickCountYellow > 0 && clickCountYellow <= 5) {
    clickCountYellow--;
    countYellow.innerText = count[clickCountYellow];
  }
}


start.onclick = function(click) {
  new Audio('http://boobooka.com/wp-content/uploads/2017/07/zvuk-sudejskogo-svistka.mp3').play(); 
  timerDisable.classList.remove("timerDisable");
  timerDisable.classList.add("timer");
  intervalID = setInterval (ticTac, 1000) 
}

  let buttonsCommand = {
    Digit8: false,
    Digit3: false
  }
  
  
  buttonColor = function(event)  {  
    buttonsCommand[event.code] = true;
    if (buttonsCommand.Digit8 && intervalID) {
      timerYellow ();
      pause = true;
      return;
    }
    if (buttonsCommand.Digit3 && intervalID) {
      timerRed ();
      pause = true;
      return;
    }
    console.log("intervalid", intervalID, !intervalID);
    if (buttonsCommand.Digit8 && !pause) {
      console.log("key 8");
      timerYellowFals ();
    }
    if (buttonsCommand.Digit3 && !pause) {
      console.log("key 3");
      timerRedFals ();
    }
  }


  timerYellow = function() {
        timerDisable.classList.remove('timer');
        timerDisable.classList.add('timerYellow');
        clearInterval(intervalID);
        intervalID = null;
        buttonsCommand.Digit8 = false;
      }

  
  timerRed = function() {
      timerDisable.classList.remove('timer');
      timerDisable.classList.add('timerRed');
      clearInterval(intervalID);
      intervalID = null;
      buttonsCommand.Digit3 = false;
    }

  timerYellowFals = function() {
    timerDisable.classList.remove("timerDisable");
    timerDisable.classList.remove('timerRed');
    timerDisable.classList.add('timerYellow');
    timerDisable.innerText = fals;
    buttonsCommand.Digit8 = false;
  }

  timerRedFals = function() {
    timerDisable.classList.remove("timerDisable");
    timerDisable.classList.remove('timerYellow');
    timerDisable.classList.add('timerRed');
    timerDisable.innerText = fals;
    buttonsCommand.Digit3 = false;
  }

  document.addEventListener('keydown', buttonColor);
  //document.addEventListener('keyup', setInterval (notButtonColor, 10000));



function ticTac() {
  timing--;
  timerDisable.innerText = timing;
  if (timing==0) {
    clearInterval(intervalID);
  }
}


removeTimer.onclick = function(click) {
  timerDisable.classList.remove('timer');
  timerDisable.classList.remove('timerYellow');
  timerDisable.classList.remove('timerRed');
  timerDisable.classList.add('timerDisable');
  timing=30;
  timerDisable.innerText = timing;
  buttonsCommand.Digit8 = false;
  buttonsCommand.Digit8 = false;
  pause = false;
}

// tenSec.onclick = function(click) {
//   clearInterval(intervalID);
//   intervalID = null;
//   timing=10;
//   timerDisable.innerText = timing;
//   timerDisable.classList.remove('timerYellow');
//   timerDisable.classList.remove('timerRed');
//   timerDisable.classList.add('timer');
//   intervalID = setInterval (ticTac, 1000) 
// }