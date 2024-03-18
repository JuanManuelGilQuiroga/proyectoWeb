const toggleMenuElement = document.getElementById("toggle__menu");
const mainMenuElement = document.getElementById("main__nav")
const linkMenuElement = document.getElementById("link")
const link2MenuElement = document.getElementById("link__2")
const link3MenuElement = document.getElementById("link__3")
const link4MenuElement = document.getElementById("link__4")
const link5MenuElement = document.getElementById("link__5")

toggleMenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.toggle("main__nav--show");
})
linkMenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("main__nav--show");
})
link2MenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("main__nav--show");
})
link3MenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("main__nav--show");
})
link4MenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("main__nav--show");
})
link5MenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("main__nav--show");
})