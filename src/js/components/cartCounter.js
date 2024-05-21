import { LitElement,html,css } from "lit";
import { getDataCarrito } from "./data";

export class CartCounter extends LitElement{
    static properties = {
        count: { type: Number },
        section: { type: String }
    }

    constructor(){
        super();
        this.section = localStorage.getItem("section");
        this.getCartCount()
    }

    changeSection(sectionChanged){
        this.section = sectionChanged;
        localStorage.setItem("section", this.section);
        location.href="/"
    }

    async getCartCount(){
        let dataCart = await getDataCarrito();
        this.count = dataCart.length;
        
    }

    connectedCallback() {
        super.connectedCallback();
        this.getCartCount();
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
        color: var()
    }
    a:hover{
        cursor: pointer;
    }
    .carrito__info{
        display: none;
    }
    i{
        font-size: 2em;
        color: var(--color-white);
    }
    @media screen and (min-width:760px) {
        .container__cart__counter{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .header a{
            transition: .2s;
        }
        .carrito__info{
            width: 75%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .carrito__info a{
            color: var(--color-white);
            font-family: "Staatliches";
        }
        .carrito__number{
            font-family: "Staatliches";
            color: var(--color-black);
            background: var(--color-white);
            padding: 3% 10%;
            border-radius: 10px;
            box-shadow: 0px 0px 10px var(--color-white);
            border: none;
        }
    }
    @media (min-width: 1050px) and (max-width:1270px) {
        .item__info{
            font-size: .8em;
        }
    }
    
    @media (min-width: 900px) and (max-width:1050px) {
        .item__info{
            font-size: .7em;
        }
    }
    
    @media (min-width: 760px) and (max-width:900px){
        .item__info{
            font-size: .5em;
        }
    }
    `

    render(){
        return html`
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
        <div class="container__cart__counter">
            <a @click=${()=>this.changeSection("carrito")}><i class='bx bxs-cart'></i></a>
            <div class="carrito__info">
                <a @click=${()=>this.changeSection("carrito")} class="carrito__title">Carrito</a>
                <button class="carrito__number" id="contador">${this.count}</button>
            </div>
        </div>
        `
    }

}
customElements.define("cart-counter", CartCounter)