const toggleMenuElement = document.getElementById("toggle__menu");
const mainMenuElement = document.getElementById("header__menu")
const linkMenuElement = document.getElementById("link__1")
const link2MenuElement = document.getElementById("link__2")
const link3MenuElement = document.getElementById("link__3")
const link4MenuElement = document.getElementById("link__4")

toggleMenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.toggle("header__menu__show");
})
linkMenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("header__menu__show");
})
link2MenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("header__menu__show");
})
link3MenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("header__menu__show");
})
link4MenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("header__menu__show");
})
