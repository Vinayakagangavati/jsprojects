let timedisplay=document.querySelector('#timedisplay');
let start=document.querySelector('#start');
let pause=document.querySelector('#pause');
let reset=document.querySelector('#reset');

let sec = 0;
let minutes = 0;
let hours = 0;
let stoptime=true;
let interval;

start.addEventListener('click',starttime);
function starttime(){
  if(stoptime==true){
    stoptime=false;
    interval=setInterval(time,1000)
}
}

pause.addEventListener('click',pausetime)
function pausetime(){
 if(stoptime==false){
   stoptime=true;
   clearInterval(interval);
 }
}

function time(){
  if(stoptime==false){
  sec=parseInt(sec);
  minutes=parseInt(minutes);
  hours=parseInt(hours);
  sec = sec + 1;
  if (sec === 60) {
    minutes = minutes + 1;
    sec = 0;
  }
  if (minutes === 60) {
    hours = hours + 1;
    minutes = 0;
    sec = 0;
  }
  if(sec<10){
    sec="0"+sec;
  }
  if(minutes<10){
    minutes="0"+minutes;
  }
  if(hours<10){
    hours="0"+hours;
  }
 timedisplay.textContent=`${hours}:${minutes}:${sec}`;
}
}

reset.addEventListener('click',resettime)
function resettime(){
  clearInterval(interval);
  stoptime=true;
  hours=0;
  minutes=0;
  sec=0;
  timedisplay.textContent=`00:00:00`;
}
