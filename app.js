
// UNIVERSAL FUNCTIONS
var airbnb1 = document.getElementById('card1');
var airbnb2 = document.getElementById('card2');
var button = document.getElementById('bookButton');
var preview = document.getElementById('preview');
var instructions = document.getElementById('instructions');

//SHOWING INSTRUCTIONS
function showInstructions(){
  function hidePreview(){preview.classList.toggle("remove")};
  function showStuff(){instructions.classList.toggle("show")};

  hidePreview();
  showStuff();
  }

button.addEventListener('click', showInstructions);

//CHANGING BOARDGAME BACKGROUND
function airbnb1click() {
gameBoard1.style.background = 'no-repeat center url(/Users/samanthaschonefeld/wdi/unit01/projects/mouse-game/assets/airbnb1.jpg)';
card1.style.border = '4px solid #337885';
}

airbnb1.addEventListener('click', airbnb1click);
function airbnb2click() {
  gameBoard1.style.background = 'no-repeat center url(/Users/samanthaschonefeld/wdi/unit01/projects/mouse-game/assets/airbnb2.jpg)';
  card2.style.border = '4px solid #337885';
}
airbnb2.addEventListener('click', airbnb2click);

// TOGGLINE MICE ON GAME INIT

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
  setInterval(function(){mouse4.classList.toggle("hidden")}, 2500)
}
var mouse5 = document.getElementById('mouse5');
function hideMouse5(){
  setInterval(function(){mouse5.classList.toggle("hidden")}, 3500);

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
  setInterval(function(){mouse8.classList.toggle("hidden")}, 2500);
}

// GAME INIT

var gameInit = document.getElementById('gameInit');
var gameBoard = document.getElementById('gameBoard1');
var end = document.getElementById('end');


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

var ohBoy = document.getElementById('ohBoy');
function ohBoy(){
  ohBoy.play();
}
gameInit.addEventListener('click', showGameboard);
gameInit.addEventListener('click', ohBoy);

// CAMERA CLICK SOUND - https://stackoverflow.com/questions/29567580/play-a-beep-sound-on-button-click
var cameraClick = document.getElementById('playClick');
function playClick(){cameraClick.play();}

//CLICK COUNT https://codepen.io/juliogcampos/pen/BzdjwY
var clickCount = 0
var counter = document.getElementById('counter');

function photoTaken(){
clickCount++;
counter.innerHTML = clickCount + ' photos taken';
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

mouse1.addEventListener('click', playClick);
mouse2.addEventListener('click', playClick);
mouse3.addEventListener('click', playClick);
mouse4.addEventListener('click', playClick);
mouse5.addEventListener('click', playClick);
mouse6.addEventListener('click', playClick);
mouse7.addEventListener('click', playClick);
mouse8.addEventListener('click', playClick);

// END GAME FUNCTION & WIN LOGIC
var winLose = document.getElementById("winLose");
function endGame(){
  alert('Stay is over, send your pictures to Airbnb!');
  function hideGameboard(){gameBoard.style.display = 'none'};
  function showEnd(){
    end.style.display = 'inline'
    if(clickCount <= 10){
      winLose.innerHTML = `You only took ${clickCount} pictures!<br>Airbnb declined your request for a refund.<br>You lose!`
    } else if (clickCount >= 11){
      winLose.innerHTML = `You took ${clickCount} pictures.<br>Congratulations Airbnb has refunded you stay.<br>You win!`
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
    document.getElementById('timer').textContent = timeleft + ' seconds left';
  if(timeleft <= 0){
        clearInterval(timer);
        endGame();
}
    },1000);
}


//  RESTART GAME - https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript

function restartGame() {
  window.location.reload();
}

var restart = document.getElementById('refresh');
restart.addEventListener('click', restartGame);



