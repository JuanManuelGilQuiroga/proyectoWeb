import { LitElement,html,css } from "lit";

export class ToggleMenu extends LitElement{
    static properties = {
        show: { type: String },
        section: { type: String }
    }
    constructor(){
        super(),
        this.show = "",
        this.section = localStorage.getItem("section") || localStorage.setItem("section","ropa");
        //this.show = localStorage.getItem("show") || ""
    }

    /*mostrarMenu(e){
        this.show = "header__nav__show"
        localStorage.setItem("show", "main__z__index")
        //document.body.children[0].shadowRoot.querySelector(".main__list").innerHTML = "<product-item></product-item>"
    }*/

    changeSection(sectionChanged){
        this.section = sectionChanged;
        localStorage.setItem("section", this.section)
        //localStorage.setItem("show", "0")
        //document.body.children[0].shadowRoot.querySelector(".main__list").innerHTML = "<product-item></product-item>"
        location.href = "/"
    }

    static styles = css`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "NunitoSans-Medium";
    }
    i{
        font-size: 2em;
        color: var(--color-white);
    }
    i:hover{
        cursor: pointer
    }
    .header__carrito i{
        font-size: 2em;
        color: var(--color-white);
    }
    .header__nav{
        position: absolute;
        transition: transform 0.3s;;
        top: 0;
        right: 0;
        left: 0;
        height: 50vh;
        z-index: 10;
    }
    .header__menu{
        list-style: none;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: var(--color-black);
    }
    .menu__item{
        position: sticky;
        color: var(--color-white);
        font-family: "Staatliches";
    }
    `
id="header__nav"
    render(){
        return html`
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
        <nav class="header__nav ${this.show}" >
            <ul class="header__menu" id="header__menu">
                <li><a class="menu__item" id="link__1" @click=${()=>this.changeSection("ropa")}><i class='bx bxs-star'></i>Todos los productos</a></li>
                <li><a class="menu__item" id="link__2" @click=${()=>this.changeSection("abrigo")}><i class='bx bxs-star'></i>Abrigos</a></li>
                <li><a class="menu__item" id="link__3" @click=${()=>this.changeSection("camiseta")}><i class='bx bxs-star'></i>Camisetas</a></li>
                <li><a class="menu__item" id="link__4" @click=${()=>this.changeSection("pantalon")}><i class='bx bxs-star'></i>Pantalones</a></li>
            </ul>
        </nav>
        `
    }
}
customElements.define("toggle-menu", ToggleMenu)