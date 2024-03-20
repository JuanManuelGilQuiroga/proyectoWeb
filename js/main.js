const toggleMenuElement = document.getElementById("toggle__menu");
const mainMenuElement = document.getElementById("header__nav")
const linkMenuElement = document.getElementById("link__1")
const link2MenuElement = document.getElementById("link__2")
const link3MenuElement = document.getElementById("link__3")
const link4MenuElement = document.getElementById("link__4")
const carritoTextoElement = document.getElementById("carrito__vacio")
const btnVaciar = document.getElementById("button__vaciar")
const carritoListElement = document.getElementById("carrito__main__list")
const totalElement = document.getElementById("total")
const btnComprar = document.getElementById("button__comprar")

toggleMenuElement.addEventListener("click", ()=>{
    setTimeout(()=>{mainMenuElement.classList.toggle("header__nav__show")}, 1000)
    
})
linkMenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("header__nav__show");
})
link2MenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("header__nav__show");
})
link3MenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("header__nav__show");
})
link4MenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.remove("header__nav__show");
})

// boton menu

const botonMain = document.getElementById("rayas");
botonMain.addEventListener("click", () => {
    botonMain.classList.add("bx-tada");
    setTimeout(() => {
        botonMain.classList.remove("bx-tada")
    }, 1000);
})
btnVaciar.addEventListener("click", ()=>{
    carritoTextoElement.classList.remove("eliminar__elemento");
    carritoListElement.classList.add("eliminar__elemento");
    totalElement.classList.add("eliminar__elemento");

})
btnComprar.addEventListener("click", ()=>{
    carritoTextoElement.classList.remove("eliminar__elemento");
    carritoListElement.classList.add("eliminar__elemento");
    totalElement.classList.add("eliminar__elemento");

})