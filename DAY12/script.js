let arr=["apple","banana","grapes","mango","orange"]

let button=document.getElementById("searchButton")
let result=document.getElementById("result")
 let searchInput=document.getElementById("searchInput")


searchInput.addEventListener("input",()=>{
    let searchInputVal=document.getElementById("searchInput").value
    if (searchInput==="") {
        return null
        
    }
    let filterItem=arr.filter((item)=>{
        return item.toLowerCase().includes(searchInputVal.toLowerCase())
    })
    result.innerHTML=filterItem.join("<br>")  
   
})