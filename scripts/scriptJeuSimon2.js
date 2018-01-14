$(document).ready(function(){
//handling clicks on buttons
$('.btn-string').click(function(){
  var id = $(this).attr('id');
  var stringNumber = parseInt(id[id.length-1]);
  if (!simonPlaysNow && gameOn) {
//t.d.:move functions 1-3 to handleUI
    handleUserInput(stringNumber);
    highlightStringButton(stringNumber);
  }
});

$('#bouttonDepart').click(function() {
  if (gameOn) {
    gameOn = false;
    $(this).html('Start');
    $('#niveau').html('');
    $('#info').html('');
    clearTimeout(userAsleepTimer);
    simonSequence = [];
    userSequence = [];
    simonSequenceCurrentPosition = null;
    simonPlaysNow = false;
  }
  else {
    gameOn = true;
    $(this).html('Stop');
    simonSequence.push(getRandomString());
    playSequence();
    $('#niveau').html(zeroPad(1));
  }
});


//application variables and functions 
var gameOn = false;
var strictMode = false;
var simonSequence = [];
var userSequence = [];
var simonSequenceCurrentPosition;

var simonPlaysNow = false;
var userTurnNow = true;

//timers
var vibrInterval;
var simonTimer;
var userAsleepTimer;

//top property of strings
//var initialPositions = [87, 117, 147, 177, 207, 237 ];
var initialPositions = [17.5, 30.8, 43.6, 56.4, 68.4, 81];
    
    

//sounds

    
var firstString1Sound = new Audio("sons/e.mp3");

var secondString2Sound = new Audio("/sons/a.mp3");

var thirdString3Sound = new Audio("sons/d.mp3");

var fourthString4Sound = new Audio("/sons/g.mp3");

var cinquiemeString5Sound = new Audio("/sons/b.mp3");
// 
var sixiemeString6Sound = new Audio("/sons/eAigu.mp3");
    
//helper functions:

function vibrate(element) {
  var initialPosition;
    switch (element) {
      case 1:
        element = "#first-string1";
        initialPosition = initialPositions[0];
        break;
      case 2:
        element = "#second-string2";
        initialPosition = initialPositions[1];
        break;
      case 3:
        element = "#third-string3";
        initialPosition = initialPositions[2];
        break;
      case 4:
        initialPosition = initialPositions[3];
        element = "#fourth-string4";
             break;
     case 5:
        initialPosition = initialPositions[4];
        element = "#cinquieme-string5";
             break;
            
             case 6:
        initialPosition = initialPositions[5];
        element = "#sixieme-string6";
             
    }
   $(element).css('top', initialPosition+"%");
   clearInterval(vibrInterval);

  var direction = 'up';
  var previousPosition = '';
  var vibrations = 0;
  var decrement = 3;

  var move = function() {
    vibrations++;
    if (vibrations < 70) {
if (direction == 'up') {
  $(element).css('top', (initialPosition + decrement)+"%");
  decrement -= 0.1;
  direction = 'middle';
  previousPosition = 'up';
} else if (direction == 'down') {
  $(element).css('top', (initialPosition - decrement)+"%");
  decrement -= 0.1;
  direction = 'middle';
  previousPosition = 'down';
} else if (direction == 'middle') {
  $(element).css('top', initialPosition+"%");
  if (previousPosition == 'down')
    direction = 'up';
  else
    direction = 'down';
}  
    } else {
      $(element).css('top', initialPosition+"%");
      clearInterval(vibrInterval);
    }    
  }; 
  vibrInterval = setInterval(move, 30);
};

function generateNewSequence(length) {
  var seq = [];
  for (var i = 0; i < length; i++) {
    seq.push(Math.ceil(Math.random()*6));
  }
  return seq;
};

function getRandomString() {
  return Math.ceil(Math.random()*6);
}

function strikeString(number) {
  switch (number) {
    case 1:
      firstString1Sound.pause();
      firstString1Sound.currentTime = 0;
      firstString1Sound.play();
      vibrate(1);
      break;
    case 2:
      secondString2Sound.pause();
      secondString2Sound.currentTime = 0;
      secondString2Sound.play();
      vibrate(2);
      break;
    case 3:
      thirdString3Sound.pause();
      thirdString3Sound.currentTime = 0;
      thirdString3Sound.play();
      vibrate(3);
      break;
    case 4:
      fourthString4Sound.pause();
      fourthString4Sound.currentTime = 0;
      fourthString4Sound.play();
      vibrate(4);
    case 5:
      cinquiemeString5Sound.pause();
      cinquiemeString5Sound.currentTime = 0;
      cinquiemeString5Sound.play();
      vibrate(5);
      break;
    case 6:
      sixiemeString6Sound.pause();
      sixiemeString6Sound.currentTime = 0;
      sixiemeString6Sound.play();
      vibrate(6);
      break;
  }
}

function playSimonSequence() {
  if (simonSequenceCurrentPosition < simonSequence.length) {
    strikeString(simonSequence[simonSequenceCurrentPosition]);
 highlightStringButton(simonSequence[simonSequenceCurrentPosition]);
    simonSequenceCurrentPosition++;
    
   
  }
  else {
    $('#info').html('A ton tour !');
    userTurnNow = true;
    simonPlaysNow = false;
    clearInterval(simonTimer);
    clearTimeout(userAsleepTimer);
    userAsleepTimer = setTimeout(isUserAsleep, 8000);
  } 
}

function playSequence() {
  userTurnNow = false;
  simonPlaysNow = true;
   $('#info').html('Simon joue...');
  strikeString(simonSequence[0]);
  highlightStringButton(simonSequence[0]);
  simonSequenceCurrentPosition = 1;
 simonTimer = setInterval(playSimonSequence, 1000);
}

function isUserAsleep() {
  if (userSequence.length < simonSequence.length) {
    if (!simonPlaysNow) {
      $('#guitar').effect('shake', playSequence);
    }
  }
}

function handleUserInput(stringNumber) {
  if (!simonPlaysNow && userTurnNow && gameOn) {
  userSequence.push(stringNumber);
  clearTimeout(userAsleepTimer);
  userAsleepTimer = setTimeout(isUserAsleep, 8000);
    isUserSequenceCorrect();
    vibrate(stringNumber);
    strikeString(stringNumber);
  }
}

function isUserSequenceCorrect() {
  if (userSequence.length == simonSequence.length) {
    if (compareArrays(userSequence,simonSequence)) {
      if (simonSequence.length < 20) {
        setTimeout(function() {
          userSequence = [];
          simonSequence.push(getRandomString());
          $('#niveau').html(zeroPad(simonSequence.length));
          $('#info').html('Bravo !');
          userTurnNow = false;
          //alert('correct');
          setTimeout(playSequence,2000);
        }, 1000);  }
      else {
        youWon();
      }
    } else {
          setTimeout(function(){
            $('#info').html('Oups !');
            if (strictMode) {
              simonSequence=[];
              simonSequence.push(getRandomString());
            }
            //alert('wrong');
            userSequence = [];
            userTurnNow = false;
            setTimeout(playSequence,2000);
          }, 1000);    
        }
}
 else {
    if (!compareArrays(userSequence, 
                    firstElements(simonSequence, userSequence.length))) {
      setTimeout(function(){
          $('#info').html('Oups !');
        if (strictMode) {
              simonSequence=[];
              simonSequence.push(getRandomString());
            }
        //alert('wrong 2');
          userSequence = [];
          userTurnNow = false;
          setTimeout(playSequence,2000);
        }, 1000);
    }
  }
}

function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    var result = true;
    arr1.forEach(function(value, index){
      if (value != arr2[index])
        result = false;
    });
    return result;
  }
}

function zeroPad(number) {
  if (number < 10) {
    return '0' + number.toString();
  } else
    return number.toString();
}

function firstElements(array, number) {
  var arr = [];
  for (var i = 0; i < number; i++) {
    arr.push(array[i]);
  }
  return arr;
}

function youWon() {
  simonSequence = [];
  userSequence = [];
  $('#info').html('Tu as gagné !');
  $('#niveau').html('');
  gameOn = false;
  $('#bouttonDepart').html('Démarrer');
  clearTimeout(userAsleepTimer);
  simonSequenceCurrentPosition = null;
  simonPlaysNow = false;
}

var highlightTimer;
function highlightStringButton(number) {
  clearTimeout(highlightTimer);
  var id = '#btn-string' + number.toString();
  $(id).css('background-color', '#848482');
  highlightTimer = setTimeout(function() {
    $(id).css('background-color', 'white');
  }, 200);
  console.log(id);
}



//icone sound
   
      $("#sound").click(function(event) {
      event.preventDefault();
      });
    
    
      var arraySound = new Array(firstString1Sound, secondString2Sound, thirdString3Sound, fourthString4Sound,  cinquiemeString5Sound, sixiemeString6Sound);
      console.log(arraySound); 
       
     var imgSound=$("#sound").attr("src");

      if(imgSound=="images/icones/iconeSonDroite0.svg" || imgSound=="./images/icones/iconeSonDroite0.svg"){
          for(var i=0; i< arraySound.length; i++){
               arraySound[i].volume=0;
           }
       }
              
   $("#sound").click(function(){
     
       var imgSound= $(this).attr("src");
       console.log(imgSound);
       
       
       if(imgSound=="images/icones/iconeSonDroite0.svg"){
           $(this).attr("src", "./images/icones/iconeSonDroite1.svg");
           for(var i=0; i< arraySound.length; i++){
               arraySound[i].volume=0.5;
           }
          
       }else if(imgSound=="./images/icones/iconeSonDroite1.svg"){
           $(this).attr("src", "./images/icones/iconeSonDroite2.svg");
           for(var i=0; i< arraySound.length; i++){
               arraySound[i].volume=1;
           }
       
       }else if(imgSound=="./images/icones/iconeSonDroite2.svg"){
           $(this).attr("src", "./images/icones/iconeSonDroite0.svg");
           for(var i=0; i< arraySound.length; i++){
               arraySound[i].volume=0;
           }
           
       
       }else if(imgSound=="./images/icones/iconeSonDroite0.svg"){
           $(this).attr("src", "./images/icones/iconeSonDroite1.svg");
           for(var i=0; i< arraySound.length; i++){
               arraySound[i].volume=0.5;
           }
       }
      
   }); 
});

                


