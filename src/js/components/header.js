import { LitElement,html,css } from "lit";

export class Header extends LitElement{

    static properties = {
        section: { type: String }
    }

    constructor(){
        super();
        this.section = localStorage.getItem("section") || "ropa";
    }

    static styles = css`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "NunitoSans-Medium";
    }
    a{
        text-decoration: none;
    }
    a:hover{
        cursor: pointer;
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
    @media screen and (min-width:760px){
        .header__menu{
            width: 100%;
            align-items: start;
        }
    }
    `
    changeSection(sectionChanged){
        this.section = sectionChanged;
        localStorage.setItem("section", this.section)
        location.href="/"
    }

    render(){
        return html`
        ${console.log(this.section)}
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
        <ul class="header__menu" id="header__menu">
                <li><a class="menu__item" id="link__1" @click=${()=>this.changeSection("ropa")}><i class='bx bxs-star'></i>Todos los productos</a></li>
                <li><a class="menu__item" id="link__2" @click=${()=>this.changeSection("abrigo")}><i class='bx bxs-star'></i>Abrigos</a></li>
                <li><a class="menu__item" id="link__3" @click=${()=>this.changeSection("camiseta")}><i class='bx bxs-star'></i>Camisetas</a></li>
                <li><a class="menu__item" id="link__4" @click=${()=>this.changeSection("pantalon")}><i class='bx bxs-star'></i>Pantalones</a></li>
        </ul>
        `
    }
}
customElements.define("my-header", Header)