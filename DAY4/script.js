let input=document.getElementById("input")
let output=document.getElementById("output")


    input.addEventListener("input",(e)=>{
        let realtimeVal=e.target.value
       
        
        output.textContent=realtimeVal.length
        
        
    })

