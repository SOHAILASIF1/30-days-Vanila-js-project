//countdown app

let today=new Date();
let currentYear=today.getFullYear();
let newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);    
let sec=1000;
let min=sec*60;
let hour=min*60;
let day=hour*24;    
function updateCountdown(){
    let currentTime=new Date();
    let diff=newYear-currentTime;
    let d=Math.floor(diff/day);
    let h=Math.floor((diff%day)/hour);
    let m=Math.floor((diff%hour)/min);
    let s=Math.floor((diff%min)/sec);
    document.getElementById("countdown").innerHTML=`${d}d ${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown,1000);  

