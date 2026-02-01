
let add=document.getElementById("add")
let subt=document.getElementById("subt")
let multiply=document.getElementById("multiply")
let divide=document.getElementById("divide")
let span=document.getElementById('span')



add.addEventListener("click",()=>{
    let num1=Number(document.getElementById("num1").value)
let num2=Number(document.getElementById("num2").value)
    span.innerHTML=num1+num2
    
})
subt.addEventListener("click",()=>{
    let num1=Number(document.getElementById("num1").value)
let num2=Number(document.getElementById("num2").value)
    span.innerHTML=num1-num2
    
})
multiply.addEventListener("click",()=>{
    let num1=Number(document.getElementById("num1").value)
let num2=Number(document.getElementById("num2").value)
    span.innerHTML=num1*num2
    
})
divide.addEventListener("click",()=>{
    let num1=Number(document.getElementById("num1").value)
let num2=Number(document.getElementById("num2").value)
    if (num2>0) {
        span.innerHTML=parseFloat(num1/num2)
    }else{
        span.innerHTML="Num2 must be greater then zero for a divide"
    }
    
})

