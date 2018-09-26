


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


var gameInit = document.getElementById('gameInit');
var gameBoard = document.getElementById('gameBoard1');
function showGameboard(){
   function showStuff(){instructions.classList.toggle("show")};
   function initGameboard(){gameBoard.style.display = 'block'};
//launch timer function here

   showStuff();
   initGameboard();
   hideMouse1();
   hideMouse2();
   hideMouse3();
   hideMouse4();
   hideMouse5();

}

gameInit.addEventListener('click', showGameboard);

//HIDING MICE at INTERVAL

// var mouse1 = document.getElementById('mouse1');
// function hideMouse1(){
// setInterval(function(){ mouse1.classList.toggle("hidden")},1000)
// console.log('mouse1 is hidden');
// }
// mouse1.addEventListener('click', hideMouse1);

// var mouse2 = document.getElementById('mouse2');
// function hideMouse2(){
//   setInterval(function(){mouse2.classList.toggle("hidden")}, 2000)
//   console.log('mouse2 is hidden');
// }
// mouse2.addEventListener('click', hideMouse2);

// var mouse3 = document.getElementById('mouse3');
// function hideMouse3(){
//   setInterval(function(){mouse3.classList.toggle("hidden")}, 3000)
//   console.log('mouse3 is hidden');
// }
// mouse3.addEventListener('click', hideMouse3);

// var mouse4 = document.getElementById('mouse4');
// function hideMouse4(){
//   setInterval(function(){mouse4.classList.toggle("hidden")}, 4000)
//   console.log('mouse4 is hidden');
// }
// mouse4.addEventListener('click', hideMouse4);

// var mouse5 = document.getElementById('mouse5');
// function hideMouse5(){
//   setInterval(function(){mouse5.classList.toggle("hidden")}, 5000);
//   console.log('mouse5 is hidden');
// }
// mouse5.addEventListener('click', hideMouse5);

var mouse6 = document.getElementById('mouse6');
function hideMouse6() {
  setInterval(function(){mouse6.classList.toggle("hidden")}, 1000);
  console.log('mouse6 is hidden');
}
mouse6.addEventListener('click', hideMouse6);

var mouse7 = document.getElementById('mouse7');
function hideMouse7() {
  setInterval(function(){mouse7.classList.toggle("hidden")}, 2000);
  console.log('mouse7 is hidden');
}
mouse7.addEventListener('click', hideMouse7);

var mouse8 = document.getElementById('mouse8');
function hideMouse8() {
  setInterval(function(){mouse8.classList.toggle("hidden")}, 500);
  console.log('mouse8 is hidden');
}
mouse8.addEventListener('click', hideMouse8);








// console.log("I work")

// window.onload = function() {
// const body = document.body;
// consol.log(body)




// var mouse = document.getElementById('mouse1');

//  function hideMouse(){
// if (mouse.style.display === "none") {
//   mouse.style.display = "block";
// } else {
//   mouse.style.display = "none";
// }
// }

// function hideMouse(){
// var image1 = document.getElementById('image1')
// image1.parentNode.removeChild(image1);
// }
// function helloMouse() {
//   console.log("hello mouse")
// }

// function hideMouse() {mouse.toggle(fast, function(){
//   alert("toggle is working");
// })
// };

// mouse.addEventListener('click', hideMouse);

// duck.addEventListener("click", function() {
//     duck.classList.add('shot')
//     setTimeout(function () {
//       duck.remove();
//      checkForWinner();
//     }, 1000);
//   });
