let today = new Date()
// This is Dec 1, 2028
let remaining = new Date(2028, 11, 1); 

let ans=remaining-today
let remaingtime=new Date(ans)
 let yearR=remaingtime.getFullYear()


console.log(yearR);

