
// Game Intro

var button = document.getElementById('bookButton');
var preview = document.getElementById('preview');
var instructions = document.getElementById('instructions');
function showInstructions(){
  function hidePreview(){preview.classList.toggle("remove")};
  function showStuff(){instructions.classList.toggle("show")};
  console.log('is this working');

  hidePreview();
  showStuff();
  }

button.addEventListener('click', showInstructions);

// Setting up Mouse Toggle on Init

var mouse1 = document.getElementById('mouse1');
function hideMouse1(){
setInterval(function(){ mouse1.classList.toggle("hidden")},1000)
}

var mouse2 = document.getElementById('mouse2');
function hideMouse2(){
  setInterval(function(){mouse2.classList.toggle("hidden")}, 2000)
}
var mouse3 = document.getElementById('mouse3');
function hideMouse3(){
  setInterval(function(){mouse3.classList.toggle("hidden")}, 3000)
}

var mouse4 = document.getElementById('mouse4');
function hideMouse4(){
  setInterval(function(){mouse4.classList.toggle("hidden")}, 4000)
}
var mouse5 = document.getElementById('mouse5');
function hideMouse5(){
  setInterval(function(){mouse5.classList.toggle("hidden")}, 5000);

}

var mouse6 = document.getElementById('mouse6');
function hideMouse6() {
  setInterval(function(){mouse6.classList.toggle("hidden")}, 1000);
}

var mouse7 = document.getElementById('mouse7');
function hideMouse7() {
  setInterval(function(){mouse7.classList.toggle("hidden")}, 2000);
}

var mouse8 = document.getElementById('mouse8');
function hideMouse8() {
  setInterval(function(){mouse8.classList.toggle("hidden")}, 500);
}

// Game Init

var gameInit = document.getElementById('gameInit');
var gameBoard = document.getElementById('gameBoard1');
var end = document.getElementById('end');

// //This is first attempt at figuring out how to end the game on a timer
// function hideGameboard() {
//   function hideGameboard(){gameBoard.style.display = 'none'};
//   function showEnd(){end.style.display = 'block'};

//   hideGameboard();
//   showEnd();
// };

// // function timeOut(){setTimeout(hideGameboard(), 4500)};

function showGameboard(){
   function showStuff(){instructions.classList.toggle("show")};
   function initGameboard(){gameBoard.style.display = 'block'};



   showStuff();
   initGameboard();
   hideMouse1();
   hideMouse2();
   hideMouse3();
   hideMouse4();
   hideMouse5();
   hideMouse6();
   hideMouse7();
   hideMouse8();
   timeOut();

};

gameInit.addEventListener('click', showGameboard);



var mice = document.getElementsByClassName('mice')
var clickCount = 0


//CLICK COUNT
var counter = document.getElementById('counter');

function photoTaken(){
//creating live click counter : https://codepen.io/juliogcampos/pen/BzdjwY
clickCount++;
console.log(clickCount);
console.log("this is kind of working too")
counter.innerHTML = clickCount;
return clickCount
  }

mouse1.addEventListener('click', photoTaken);
mouse2.addEventListener('click', photoTaken);
mouse3.addEventListener('click', photoTaken);
mouse4.addEventListener('click', photoTaken);
mouse5.addEventListener('click', photoTaken);
mouse6.addEventListener('click', photoTaken);
mouse7.addEventListener('click', photoTaken);
mouse8.addEventListener('click', photoTaken);


// END GAME FUNCTION & WIN LOGIC
var winLose = document.getElementById("winLose");
function endGame(){
  alert('game should end here');
  console.log('game over');
  function hideGameboard(){gameBoard.style.display = 'none'};
  function showEnd(){
    end.style.display = 'inline'
    if(clickCount <= 10){
      winLose.textContent = `You only took ${clickCount} pictures! Airbnb declined your request for a refund. You lose!`
    } else if (clickCount >= 11){
      winLose.textContent = `You took ${clickCount} pictures. Congratulations Airbnb has refunded you stay!`
    }
    };
  hideGameboard();
  showEnd();

  }

//CREATING LIVE TIMER -https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
function timeOut() {
    var timeleft = 10;
    var timer = setInterval(function(){
    timeleft--;
    document.getElementById('timer').textContent = timeleft;
  if(timeleft <= 0){
        clearInterval(timer);
        // console.log(timeleft);
        document.getElementById('timer').textContent = timeleft;
        endGame();
}
    },1000);
}

console.log(end);

//  RESTART GAME

function restartGame() {
  window.location.reload();
}

var restart = document.getElementById('refresh');
restart.addEventListener('click', restartGame);


