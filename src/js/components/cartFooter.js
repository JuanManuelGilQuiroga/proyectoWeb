import { LitElement,html,css } from "lit";
import { getDataCarrito } from "./data";

export class CartFooter extends LitElement{
    /*static properties = {

    }*/

    constructor(){
        super();
    }

    static styles = css`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "NunitoSans-Medium";
    }
    .carrito__main__footer{
        width: 100%;
        margin: 5%;
        display: flex;
        justify-content: space-between;
    }
    .button__vaciar{
        width: 30%;
        background: var(--color-black);
        color: var(--color-white);
        border: none;
        border-radius: 15px;
        padding: 10px 20px;
        font-size: .8em;
        cursor: pointer;
    }
    .button__vaciar p{
        padding: auto;
    }
    .main__footer__div{
        display: flex;
        justify-content: space-between;
        width: 57%;
    }
    .total{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--color-black);
    }
    .total p:last-child{
        font-family: "NunitoSans-Bold";
    }
    .button__comprar{
        width: 50%;
        background: var(--color-black);
        color: var(--color-white);
        border: none;
        border-radius: 15px;
        padding: 10px 20px;
        font-size: .8em;
        cursor: pointer;
    }
    @media screen and (min-width: 760px){
        .carrito__main__footer{
            width: 100%;
            margin: 2%;
            display: flex;
            justify-content: space-between;
        }
        .button__vaciar{
            width: 30%;
            background: var(--color-black);
            color: var(--color-white);
            border: none;
            border-radius: 15px;
            padding: 8px 20px;
            font-size: .8em;
            cursor: pointer;
            transition: .2s;
        }
        .button__vaciar:hover{
            transform: scale(.9);
            box-shadow: 0px 0px 20px var(--color-black);
        }
        .main__footer__div{
            border-radius: 15px;
            padding: 1% 3%;
            background: var(--color-black);
            width: 40%;
            display: flex;
            justify-content: space-between;
        }
        .total > *{
            color: var(--color-white);
        }
        .button__comprar{
            align-self: center;
            background: var(--color-white);
            color: var(--color-black);
            height: 70%;
            width: 60%;
            padding: 8px 20px;
            font-size: .8em;
            cursor: pointer;
            transition: .2s;
        }
        .button__comprar:hover{
            transform: scale(.9);
            box-shadow: 0px 0px 20px var(--color-white);
        }
    }
    
    `
    render(){
        return html`
        <div class="carrito__main__footer">
            <button class="button__vaciar" id="button__vaciar"><p>Vaciar Carrito</p></button>
            <div class="main__footer__div" id="total">
                <div class="total">
                    <p>Total</p>
                    <p id="total__carrito">$530000</p>
                </div>
                <button class="button__comprar" id="button__comprar"><p>Comprar Ahora</p></button>
            </div>
        </div>
        `
    }

}
customElements.define("cart-footer", CartFooter);