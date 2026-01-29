let adding=document.getElementById("adding")
let subt=document.getElementById("subt")
let resetVal=document.getElementById("reset")
let value=document.getElementById("span")

let count=0

function increment(){
    return count++

}
function decrement(){
    return count--

}
function reset(){
    return count=0
}

adding.addEventListener("click",()=>{
    increment()
    value.innerHTML=count

})
subt.addEventListener("click",()=>{
    if (count>0) {
        decrement()
        value.innerHTML=count
    }

})
resetVal.addEventListener("click",()=>{
    reset()
    value.innerHTML=count

})


