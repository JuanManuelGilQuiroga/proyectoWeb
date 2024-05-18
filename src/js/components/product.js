import { LitElement,html,css } from "lit";
import { getData } from "./data";

export class Product extends LitElement{
    static get properties() {
        return {
            products: { type: Array }
        };
    }    
    constructor(){
        super();
        this.products = {}
    }
    async getProducts(){
        this.products = await getData();
        console.log(this.products)
    }
    connectedCallback() {
        super.connectedCallback();
        this.getProducts();
    }
    static styles = css`
    .product__item{
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
    ` 
    render(){
        return html`
        <div class="product__item">
            <div class="item__img">
                <img src="storage/img/black-abrigo.webp" alt="">
            </div>
            <div class="item__info">
                <p>Abrigo 01</p>
                <div class="info__div">
                    <p>$150.000</p>
                    <button class="button__agregar" onclick="contadorCarrito('contador')" >Agregar</button>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define("product-item", Product)