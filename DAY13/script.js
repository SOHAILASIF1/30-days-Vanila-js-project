let button=document.getElementById("openPopup")
let displayDIV=document.querySelector(".popup")
let closeP=document.getElementById("closePopup")
button.addEventListener("click",()=>{
    displayDIV.style.display="block"
    button.style.display="none"
    

})
closeP.addEventListener("click",()=>{
    displayDIV.style.display="none"
    button.style.display="block"

})