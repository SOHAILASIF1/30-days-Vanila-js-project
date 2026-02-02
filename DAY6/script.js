let random=Math.floor(Math.random()*100)
let life=5




let check = document.getElementById("check")
let gamestatus=document.getElementById("gamestatus")
let liferem=document.getElementById("life")

function checkNum() {
    let num=Number(document.getElementById("num").value)
    if (num===random) {
       gamestatus.textContent="You Win"
        
        
    }else if (num>random) {
        gamestatus.textContent="you guess a high number"
        life--
        liferem.innerHTML=life
        
        
    }else if(num<random){
        gamestatus.textContent="you guess a lower number"
        life--
        liferem.innerHTML=life
        
    }
    
}
function gameOver() {
    gamestatus.textContent="Game Over Please refresh the page for playing again"
    
}
function checkLife(){
    if (life<=0) {
        gameOver()
        
    }

}
check.addEventListener("click",()=>{
    checkNum()
    checkLife()
})