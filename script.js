

var clock = document.getElementById('clock');
var hexColor = document.getElementById('hexColor');

function displayClock (){
  var time = new Date();
  var hrs = time.getHours().toString();
  var min = time.getMinutes().toString();
  var sec = time.getSeconds().toString();

  if(hrs < 10){
    hrs = '0' + hrs;
  }
  if(min < 10){
    min = '0' + min;
  }
  if(sec < 10){
    sec = '0' + sec;
  }

  var clockToString = hrs + ':' + min +':' + sec;
  var hexToString = '#' + hrs + min + sec;


  clock.textContent = clockToString;
  hexColor.textContent = 'Current Color:' + hexToString;

  document.body.style.backgroundColor = hexToString;
}
displayClock();
setInterval(displayClock, 500);
