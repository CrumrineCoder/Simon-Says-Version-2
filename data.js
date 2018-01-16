
var currentStreak = document.getElementById('currentSteps');
var red = document.getElementById('redBlock');
var blue = document.getElementById('blueBlock');
var yellow = document.getElementById('yellowBlock');
var green = document.getElementById('greenBlock');
var redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var timeout;
var newArr = [];
var done = false;
var colorArr = [];
var strict = false; 

window.onload = addStep();
window.onload = loadColors();

function loadColors() {
    done = false;
    newArr = [];
    function myTimeoutFunction() {
        red.style.background = "white";
        blue.style.background = "white";
        yellow.style.background = "white";
        green.style.background = "white";
        displayColors();
        if (!done) {
            timeout = setTimeout(myTimeoutFunction, 1000);
        }
    }
    myTimeoutFunction();
}

function addStep() {
    if(colorArr.length == 20){
      document.getElementById('victory').innerHTML = "You have won by gaining a streak of 20!";
      reset();
    }
    else{
    var color = Math.floor((Math.random() * 4) + 1);
    colorArr.push(color);
   
           currentStreak.innerHTML = colorArr.length; 
    }
}


function repeatColors(number){
  
   if(done){
      document.getElementById('youSuck').innerHTML  =  "";
      document.getElementById('victory').innerHTML  =  "";
    if(number == newArr[0]){
      colorArr.push(newArr[0]);
      newArr.shift();
      if(newArr.length == 0){
        addStep();
        loadColors();
      }
      inArray.innerHTML=colorArr; 
      inArraySub.innerHTML=newArr; 
     
    }
    else{
      if(strict){
        document.getElementById('youSuck').innerHTML  =  "You have missed a button press and had strict mode on.";
        reset();
      }
      else{
      colorArr = colorArr.concat(newArr);
      newArr = [];
      loadColors();
      }
    }
     
  }
}
function displayColors() {
    // Need to create a fade in effect for the colors
    if (colorArr.length == 0) {
        clearTimeout(timeout);
        done = true;
     //   colorArr = newArr.slice(0);
    } else {
        if (colorArr[0] == 1) { // red 
            red.style.background = "red";
            redSound.play();
        }
        if (colorArr[0] == 2) { // blue
            blue.style.background = "blue";
            blueSound.play();
        }
        if (colorArr[0] == 3) { // yellow
            yellow.style.background = "yellow";
            yellowSound.play();
        }
        if (colorArr[0] == 4) { //green
            green.style.background = "green";
            greenSound.play();
        }
        newArr.push(colorArr[0]);
        colorArr.shift();
      
    }
}

function reset(){
  newArr = [];
  colorArr = [];
  addStep();
  loadColors();
}

function toggleStrict(){
   if(strict){
     strict = false; 
     document.getElementById('turnStrict').innerHTML = "TOGGLE STRICT (CURRENTLY OFF)"
   }
   else if(!strict){
     strict = true; 
     document.getElementById('turnStrict').innerHTML = "TOGGLE STRICT (CURRENTLY ON)"
   }
}