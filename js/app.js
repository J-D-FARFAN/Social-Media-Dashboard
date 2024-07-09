const toggle = document.querySelector("#modeLight")
const body = document.querySelector("body")


toggle.addEventListener("click", () =>{
    if(!body.classList.contains("darkMode")){
        body.classList.add("darkMode")
    }else{
        body.classList.remove("darkMode")
    }
})