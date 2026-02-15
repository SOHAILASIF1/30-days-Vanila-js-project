let toggleButton=document.getElementById("toggleButton")
let root=document.documentElement

const savedTheme=localStorage.getItem("theme")
if (savedTheme) {
    root.classList.add(savedTheme)
    
}
function themeToggle() {
    if (root.classList.contains("dark")) {
        root.classList.remove("dark")
        root.classList.add("light")
        localStorage.setItem("theme","light")
        
    }else{
        root.classList.remove("light")
        root.classList.add("dark")
        localStorage.setItem("theme","dark")
    }
    
}
toggleButton.addEventListener("click",themeToggle)