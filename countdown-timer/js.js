const daysel=document.getElementById('days');
const hoursel=document.getElementById('hours');
const minsel=document.getElementById('mins');
const secondsel=document.getElementById('seconds');


const startramzan="01 march 2025";

function countdown(){
const startramzandate=new Date(startramzan);
const currentdate=new Date();

const totalseconds=(startramzandate-currentdate)/1000;

const days=Math.floor(totalseconds/3600/24);
const hours=Math.floor(totalseconds/3600)%24;
const mins=Math.floor(totalseconds/60)%60;
const seconds=Math.floor(totalseconds)%60;

//console.log(days,hours,minutes,seconds);
//console.log(startramzan);

daysel.innerHTML=days;
hoursel.innerHTML=formatTime(hours);
minsel.innerHTML=formatTime(mins);
secondsel.innerHTML=formatTime(seconds);

}
function formatTime(time){
    return time < 10 ? `0${time}` :time;
}
//intial call
countdown();

setInterval(countdown, 1000);
