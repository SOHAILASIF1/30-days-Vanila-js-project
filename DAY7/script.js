// let convertButton=document.getElementById("convert")
// let textSpan=document.getElementById("textSpan")

// convertButton.addEventListener("click",()=>{
//     let tempInput=Number(document.getElementById("tempInput").value)
//     let farhanite= ((9*tempInput)/5)+32
//     textSpan.innerHTML=farhanite
// })






// approch real time convert
let tempInput=document.getElementById("tempInput")
let textSpan=document.getElementById("textSpan")

function tempCOnvert(){
    let tempInputVal=Number(document.getElementById("tempInput").value)
    let farhanite=((9*tempInputVal)/5)+32
    textSpan.innerHTML=farhanite



    
}
tempInput.addEventListener("input",()=>{
    tempCOnvert()

})


