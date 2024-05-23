import { LitElement,html,css } from "lit";
import { getDataCarrito, deleteProducts, patchProducts } from "./data";

export class Cart extends LitElement{
    static properties = {
        products: { type: Array },
        section: { type: String }
    }
    constructor(){
        super();
        this.getProductsCart;
        this.section = localStorage.getItem("section")
    }
    async getProductsCart(){
        let data = await getDataCarrito();
        this.products = data
        this.requestUpdate()
    }
    connectedCallback() {
        super.connectedCallback();
        this.getProductsCart()
    }

    removeToCart(item){
        //AQUI ES LA FUNCION CON LA CUAL SE VA A SUBIR EL PRODUCTO AL CARRITO
        let { precio, id, cantidad } = item;
        //let exists = this.products.some(product => product.id === item.id);
        if(cantidad>1){
            let index = this.products.findIndex(product => product.id === item.id);
            this.products[index].cantidad -= 1;
            let cantidadNueva = this.products[index].cantidad
            this.products[index].subtotal = this.products[index].cantidad*precio;
            let subtotalNuevo = this.products[index].subtotal
            patchProducts(id, cantidadNueva, subtotalNuevo)
        }else{
            deleteProducts(id)

        }
        location.href = "/"
        //this.products.push(item)

    }

    static styles = css`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "NunitoSans-Medium";
    }
    .carrito__item{
        margin: 1%;
        width: 100%;
        height: 18vh;
        border-radius: 15px;
        transition: all 0.3s;
        background: var(--color-black);
        display: flex;
        justify-content: space-around;
        align-items: center;
    
        animation: reveal linear both;
        animation-timeline: view();
        animation-range: entry 10% cover 23%;
        overflow-y: scroll
    }

    ::-webkit-scrollbar{
        width: 0;

    }
    .carrito__item:active{
        transform: scale(1.03);
        box-shadow:  0px 0px 15px var(--color-black);
    }
    .carrito__item__img{
        height: 80%;
    }
    .carrito__item__img img{
        object-fit: cover;
        height: 100%;
        border-radius: 15px;
    }
    .carrito__item__info{
        height: 70%;
        width: 65%;
        display: grid;
        grid-template-columns: repeat(2, 2fr) .5fr;
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas: 
        "info__one info__two trash"
        "info__three info__four trash";
        place-items: start;
        color: var(--color-white);
    }
    .carrito__item__info >div p:first-child{
        font-family: "NunitoSans-Regular";
        font-size: .8em;
    }
    .carrito__item__info >div p:last-child{
        font-family: "NunitoSans-Bold";
        font-size:.8em;
    }
    .item__info__one{
        grid-area: info__one;
    }
    .item__info__two{
        grid-area: info__two;
    }
    .item__info__two p:last-child{
        background: var(--color-white);
        color: var(--color-black);
        padding-left: 5px;
        border-radius: 10px;
    }
    .item__info__three{
        grid-area: info__three;
    }
    
    .item__info__four{
        grid-area: info__four;
    }
    .carrito__item__info > i{
        grid-area: trash;
        font-size: 1.5em;
        transition: .2s;
        place-self: center;
    }
    .carrito__item__info > i:active{
        color: red;
    }
    @media screen and (min-width: 760px){
        .carrito__item{
            padding: 0 5%;
            margin: 1%;
            width: 100%;
            height: 20vh;
            border-radius: 15px;
            transition: all 0.3s;
            background: var(--color-black);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .carrito__item:hover{
            box-shadow:  0px 0px 15px var(--color-black);
            transform: scale(1.03);
        }
        .carrito__item__info{
            height: 80%;
            width: 80%;
            display: flex;
            justify-content: space-between;
            place-items: center;
            color: var(--color-white);
        }
        .carrito__item__info > i{
            grid-area: trash;
            font-size: 2em;
            transition: .2s;
            place-self: center;
        }
        .carrito__item__info > i:hover{
            transform: scale(.9);
            text-shadow: 0px 0px 10px var(--color-white);
        }
    }
    @keyframes reveal{
        from{
            scale: .8;
            opacity: 0;
            translate: 0 100px;
        }
    
        to{
            scale: 1;
            translate: 0 0;
            opacity: 1;
        }
    }
    `

    render(){
        return html`
        ${this.section === "carrito" ? html`
            ${this.products.map(val => html`
            <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
            <div class="carrito__item" id="nono">
                <div class="carrito__item__img">
                    <img src=${val.imagen} alt="">
                </div>
                <div class="carrito__item__info">
                    <div class="item__info__one">
                        <p>Nombre</p>
                        <p>${val.nombre}</p>
                    </div>
                    <div class="item__info__two">
                        <p>Cantidad</p>
                        <p>${val.cantidad}</p>
                    </div>
                    <div class="item__info__three">
                        <p>Precio</p>
                        <p>$${val.precio}</p>
                    </div>
                    <div class="item__info__four">
                        <p>Subtotal</p>
                        <p>$${val.subtotal}</p>
                    </div>
                    <i class='bx bxs-trash-alt' id='bx_boton' @click=${()=>this.removeToCart(val)}></i>
                </div>
            </div>
            `)}
        ` : html``}
        `
    }
}
customElements.define("my-cart", Cart)