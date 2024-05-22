import { LitElement,html,css } from "lit";
import { getAllProducts, postProducts, getDataCarrito, patchProducts } from "./data";

export class Product extends LitElement{
    static properties = {
        dataCarrito: { type: Array},
        products: { type: Array },
        section: { type: String }
    }   
    constructor(){
        super();
        this.products = [];
        this.getDataCarrito()
        this.section = localStorage.getItem("section")
    }

    async getProducts(){
        this.products = await getAllProducts();
        this.requestUpdate()
    }

    async getDataCarrito(){
        this.dataCarrito = await getDataCarrito();
    }

    

    connectedCallback() {
        super.connectedCallback();
        this.getProducts();
    }

    addToCart(item){
        //AQUI ES LA FUNCION CON LA CUAL SE VA A SUBIR EL PRODUCTO AL CARRITO
        let { precio, id } = item;
        let cantidad = 1;
        let subtotal = cantidad*precio;
        let exists = this.dataCarrito.some(product => product.id === item.id);
        if(exists){
            let index = this.dataCarrito.findIndex(product => product.id === item.id);
            this.dataCarrito[index].cantidad += 1;
            let cantidadNueva = this.dataCarrito[index].cantidad
            this.dataCarrito[index].subtotal = this.dataCarrito[index].cantidad*precio;
            let subtotalNuevo = this.dataCarrito[index].subtotal
            /*let productoCarrito = {...item, cantidadNueva, subtotalNuevo}
            let dataCarritoNuevo = this.dataCarrito.map(producto =>{
                if(producto.id === productoCarrito.id) return productoCarrito;
                return producto
            })*/
            patchProducts(id, cantidadNueva, subtotalNuevo);
            console.log(this.dataCarrito)
        }else{
            let productoCarrito = {...item, cantidad, subtotal }
            postProducts(productoCarrito)
            
        }
        location.href="/"
        //this.dataCarrito.push(item)

    }

    static styles = css`
    :root{
        --color-white: #fff;
        --color-grey: #efefef;
        --color-black: #1c1b1b;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "NunitoSans-Medium";
    }
    .product__item{
        width: 45%;
        border-radius: 15px;
        transition: all 0.3s;
        animation: reveal linear both;
        animation-timeline: view();
        animation-range: entry 20% cover 30%;
    }
    .product__item:active{
        transform: scale(1.03);
        box-shadow:  0px 0px 15px var(--color-black);
    }
    .item__img img{
        object-fit: cover;
        width: 100%;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    
    }
    
    .item__info{
        margin-top: -6px;
        background: var(--color-black);
        padding: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    .item__info p{
        color: var(--color-white);
        font-size: .8em;
    }
    .info__div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .info__div button{
        position: absolute;
        right: 0;
        background: var(--color-white);
        border: none;
        border-radius: 5px;
        padding: 3% 5% 3%;
        color: var(--color-black);
        font-size: .7em;
        font-family: "NunitoSans-Bold";
    
        transition: all .2s;
    }
    .info__div button:active{
        padding: 1% 3% 1%;
        box-shadow: 0px 0px 10px var(--color-black);
    }
    @media screen and (min-width:760px){
        .product__item:hover{
            overflow: hidden;
            /*transform: rotate(5deg);*/
            box-shadow:  0px 0px 15px var(--color-black);
            transform: scale(1.05);
        }
        .product__item{
            width: 22.5%;
            border-radius: 15px;
            transition: all 0.3s;
        
            animation: reveal linear both;
            animation-timeline: view();
            animation-range: entry 20% cover 30%;
        }
        .item__info{
            margin-top: -8px;
        }
        .info__div a{
            font-size: 1em;
        }
        .info__div button:hover{
            padding: 1% 3% 1%;
            box-shadow: 0px 0px 10px var(--color-white);
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
        let filteredProducts = []
        if(this.section!=="carrito"){
            if(this.section==="ropa"){
                filteredProducts = this.products
            } else{
                filteredProducts = this.products.filter(val => val.categoria === this.section)
            }
        }
        return html`
        ${console.log(this.dataCarrito)}
        ${this.section !== "carrito" ? html`
            ${filteredProducts.map(val=> html`
            <div class="product__item">
                <div class="item__img">
                    <img src=${val.imagen} alt="">
                </div>
                <div class="item__info">
                    <p>${val.nombre}</p>
                    <div class="info__div">
                        <p>$${val.precio}</p>
                        <button class="button__agregar" @click=${()=>this.addToCart(val)} >Agregar</button>
                    </div>
                </div>
            </div>
            `)}
           ` : html``
        }`       
    }
}
customElements.define("product-item", Product)