
let nameError=document.getElementById("usernameError")
let emailError=document.getElementById("emailError")
let passwordError=document.getElementById("passwordError")
let confirmPasswordError=document.getElementById("confirmPasswordError")

let form=document.getElementById("myForm")

function handleSubmit(e) {
    e.preventDefault()
    let name=document.getElementById("username").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value
let confirmPassword=document.getElementById("confirmPassword").value

clearError()

if (name==="") {
      
           showError("usernameError","this fiield not be empty")
        
    
}
if (!email==="") {
    showError("emailError","email is required")

    
}
if (password.lenght<8) {
    showError("passwordError","the password must me greater then 8 digitys")
    
}
if (password!==confirmPassword) {
    showError("confirmPasswordError","password does not match")
    
}



    
}
function showError(id,message) {
    let element=document.getElementById(id)
    element.innerHTML=message
       setTimeout(() => {
        element.textContent = "";
    }, 2000)
    
}
function clearError(){
     document.querySelectorAll(".error").forEach(el => {
        el.textContent = "";
    });
    
}
form.addEventListener("submit",(e)=>{
    handleSubmit(e)


})





// let form = document.getElementById("myForm");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     let username = document.getElementById("username").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("password").value.trim();
//     let confirmPassword = document.getElementById("confirmPassword").value.trim();

//     // Clear old errors
//     clearErrors();

//     if (username === "") {
//         showError("usernameError", "Username is required");
//     }

//     if (email === "") {
//         showError("emailError", "Email is required");
//     }

//     if (password.length < 6) {
//         showError("passwordError", "Password must be at least 6 characters");
//     }

//     if (confirmPassword !== password) {
//         showError("confirmPasswordError", "Passwords do not match");
//     }
// });

// function showError(id, message) {
//     let element = document.getElementById(id);
//     element.textContent = message;

//     setTimeout(() => {
//         element.textContent = "";
//     }, 2000); // 2 seconds
// }

// function clearErrors() {
//     document.querySelectorAll(".error").forEach(el => {
//         el.textContent = "";
//     });
// }
