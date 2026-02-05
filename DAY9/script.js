let generate=document.getElementById("generatePass")
let passInput=document.getElementById("pass")
 let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
 function generatePass(length){
     passInput.innerHTML = ""
    for (let i = 0; i < length; i++) {
       const res=Math.floor(Math.random()*chars.length)
       passInput.innerHTML+=chars[res]
        
    }

 }
let min = 8;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
generate.addEventListener("click",()=>{
    generatePass(randomNum)
})
