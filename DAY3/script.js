let realTime=document.getElementById("time")

function digitalClock(){
    let time=new Date()
    let hour=time.getHours()
   let minute=time.getMinutes()
   let second=time.getSeconds()
   realTime.innerHTML=`The time is ${hour}:${minute}:${second}`
}


setInterval(() => {
    digitalClock()
    



    
}, 1000);