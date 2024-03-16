const header__nav = document.querySelector("#header__nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    header__nav.classList.add("visible");
})

close.addEventListener("click", () => {
    header__nav.classList.remove("visible");
})