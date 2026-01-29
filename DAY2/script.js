let change=document.getElementById(("background"))
let span=document.getElementById("span")

function randomColorGenerator(){
    let color=Math.floor(Math.random()*1677215).toString(16).padStart(6,"0")
   return "#"+color
}


change.addEventListener("click",()=>{
    let generate=randomColorGenerator()
    document.body.style.backgroundColor=generate
    span.innerHTML=generate

})
