import { LitElement,html,css } from "lit";

export class MyGrid extends LitElement{
    static properties = {
        section: { type: String },
        title: { type: String }
    }
    constructor(){
        super();
        this.section = localStorage.getItem("section");
        this.title = ""
    }
    changeSectionTitle(){
        if(this.section === "ropa"){
            this.title = "TODOS LOS PRODUCTOS"
        }else if(this.section === "abrigo"){
            this.title = "ABRIGOS"
        }else if(this.section === "camiseta"){
            this.title = "CAMISETAS"
        }else if(this.section === "pantalon"){
            this.title = "PANTALONES"
        }else if(this.section === "carrito"){
            this.title = "CARRITO"
        }
    }
    static styles = css`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "NunitoSans-Medium";
    }
    .body__container{
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: .5fr 2fr;
        grid-template-areas:
        "header"
        "main";
    }
    .invisible{
        display: none;
        
    }
    .carrito__vacio{
        position: absolute;
        top: 25%;
        align-self: center;
        color: var(--color-black);
    }
    .carrito__main__list{
        width: 100%;
        height: 70vh;
        overflow-y: scroll;
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        /*display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(15, 1fr);
        grid-template-areas: 
        "producto1"
        "producto2"
        "producto3"
        "producto4"
        "producto5"
        "producto6"
        "producto7"
        "producto8"
        "producto9"
        "producto10"
        "producto11"
        "producto12"
        "producto13"
        "producto14"
        "producto15";
        grid-gap: 15px;*/
    }
    a{
        text-decoration: none;
    }
    a:hover{
        cursor: pointer;
    }
    .header{
        width: 100%;
        position: sticky;
        background: var(--color-black);
        padding: 3%;
        grid-area: header;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .toggle__menu i{
        font-size: 2em;
        color: var(--color-white);
    }
    .toggle__menu i:hover{
        cursor: pointer;
    }
    .header__title{
        font-size: 2em;
        font-family: "Staatliches";
        color: var(--color-white);
        animation: blink 2s linear reverse infinite;
    }

    /* animacion para parpadear */

    @keyframes blink {
        0%{
            text-shadow: 0px 0px 20px var(--color-white);
        }
        20%{
            text-shadow: 0px 0px 10px var(--color-white);
        }
        100%{
            text-shadow: 0px 0px 20px var(--color-white);
        }
    }

    .header__carrito i{
        font-size: 2em;
        color: var(--color-white);
    }
    .header__nav{
        position: absolute;
        transition: transform 0.3s;
        transform: translateY(-200%);
        top: 0;
        right: 0;
        left: 0;
        height: 50vh;
        z-index: 10;
    }
    .header__nav__show{
        transform: translateY(0);
    }
    .header__copy{
        display: none;
    }
    
    ::-webkit-scrollbar{
        width: 0;
    
    }
    
    
    main{
        height: 90vh;
        grid-area: main;
        padding: 3%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    main h2{
        margin: 5%;
        font-family: "Staatliches";
        color: var(--color-black);
    }
    .main__list{
        height: 80vh;
        overflow-y: scroll;
        padding: 20px;
        display: flex;
    }
    product-item{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px
    }
    my-cart{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px
    }
    @media screen and (min-width:760px){
        .body__container{
            font-size: 20px;
            background: var(--color-black);
            grid-template-columns: .5fr 2fr;
            grid-template-rows: 1fr;
            grid-template-areas:
            "header main"
            ;
            place-items: center;
        }
        .header{
            width: 100%;
            position: initial;
            height: 85vh;
            flex-direction: column;
            width: auto;
            padding: 0;
        }
        .toggle__menu{
            display: none;
        }
        .header__nav{
            display: flex;
            position: initial;
            transform: initial;
        }
        .header a{
            transition: .2s;
        }
        .header a:hover{
            text-shadow: 0px 0px 5px var(--color-white);
        }
        .header__carrito{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .header__copy{
            width: 70%;
            display: flex;
            justify-content: space-between;
        }
        .header__copy > *{
            color: var(--color-white);
        }
    
        main{
            box-shadow: 0px 0px 10px var(--color-white);
            width: 90%;
            margin-top: 0;
            background: var(--color-white);
            place-self: center;
            border-radius: 30px;
        }
        main h2{
            margin: 0;
            margin-left: 1.5%;
        }
        .main__list{
            height: 75vh;
            overflow-y: scroll;
            padding: 20px;
            display: flex;
        }
        product-item{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px
        }
        my-cart{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px
        }
    }
    `
    render(){
        return html`
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
        <script type="module" src="/src/js/components/product.js"></script>
        <script type="module" src="/src/js/components/header.js"></script>
        <script type="module" src="/src/js/components/cartCounter.js"></script>
        <script type="module" src="/src/js/components/cart.js"></script>
        <link rel="stylesheet" href="../../css/style.css">
        <div class="body__container">
            <div class="header">
                <div class="toggle__menu" id="toggle__menu">
                    <i class='bx bx-menu' id="rayas"></i>
                </div>
                <h2 class="header__title">CampusShop</h2>
                <nav class="header__nav" id="header__nav">
                    <my-header></my-header>
                </nav>
                <div class="header__carrito">
                    <cart-counter></cart-counter>
                </div>
                <div class="header__copy">
                    <i class='bx bx-copyright'></i>
                    <p>2023 Juan</p>
                </div>
            </div>
            
            <main id="main">
                <h2>${this.title}</h2>
                <div class="main__list">
                    ${this.section === "carrito" ? html`<my-cart></my-cart>` : html`<product-item></product-item>`}
                    
                </div>
            </main>
        </div>
        `
    }
}
customElements.define("my-grid",MyGrid)