const days= document.getElementById('days');
const hour= document.getElementById('hour');
const minute= document.getElementById('minute');
const second= document.getElementById('second');

const btn=document.getElementById("subBtn");
const rstBtn=document.getElementById("reset");
const eventHeading=document.getElementById("Event");

rstBtn.onclick=()=>{
    location.href="#top";
    document.getElementById("targetDate").value='';
    document.getElementById("targetTime").value='';
    document.getElementById("eventName").value='';
    rstBtn.style.display="none";
}

let targetDate;
let targetTime;
let countTime;
let eventName;

const oneSecond=1000;
const oneMinute=oneSecond*60;
const oneHour=oneMinute*60;
const oneDay=oneHour*24;

let intervalId;

btn.onclick=()=>{
    targetDate=document.getElementById("targetDate").value;
    targetTime=document.getElementById("targetTime").value;
    eventName=document.getElementById("eventName").value;
    if(targetDate==''||targetTime==''||eventName==''){
        alert("Enter All The Input Fields!");
    }else{
        location.href="#Event"
    }
    clearInterval(intervalId);
    eventHeading.innerHTML=eventName;
    // eventHeading.style.color="grey";
    countTime=new Date(targetDate+'T'+targetTime).getTime();
    // timer();
    intervalId=setInterval(timer,1000);
};

function addZero(x){
    return x<10?'0'+String(x):String(x);
}

function timer(){
    let currentTime=new Date().getTime();
    let difference=countTime-currentTime;
    if(difference<0){
        eventHeading.innerHTML="Countdown Over!!";
        // eventHeading.style.color="rgba(228, 228, 228, 1)";
        rstBtn.style.display="block";
        clearInterval(intervalId);
        return;
    }

    let date=Math.floor(difference/oneDay);
    let h=Math.floor((difference%oneDay)/oneHour);
    let m=Math.floor((difference%oneHour)/oneMinute);
    let s=Math.floor((difference%oneMinute)/oneSecond);

    days.innerHTML=addZero(date)+':<br><span class="description">Day(s)</span>';
    hour.innerHTML=addZero(h)+':<br><span class="description">Hour(s)</span>';
    minute.innerHTML=addZero(m)+':<br><span class="description">Minute(s)</span>';
    second.innerHTML=addZero(s)+'<br><span class="description">Second(s)</span>';
}
