import { LitElement, html, css } from 'lit';

export class Slider extends LitElement {
    static styles = [
        css`
            *{
                font-family: BentonSansBBVA-Medium,Helvetica,Arial,sans-serif;
            }

            section{
                height: 200px; 
                display: flex;
                justify-content: center;
            }

            section>div{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 1200px;
                overflow: hidden;
                position: relative;
            }

            ul{
                display: flex;
                align-items: baseline;
                list-style: none;
                height: 50%;
                padding-left: 0;
                width: 1180px;
            }

            li{
                text-align: center;
                transition: 2s;
                width: 167px;
            }

            a:hover{
                color: #121212;
            }

            a{
                display: flex;
                flex-direction: column;
                align-items: center;
                text-decoration: none;
                color: #1973B8;
                margin: 15px;
            }

            img{
                width: 20px;
                margin-bottom:10px;
                filter: var(--svg-icon-color-default,brightness(0) saturate(100%) invert(40%) sepia(58%) saturate(655%) hue-rotate(163deg) brightness(92%) contrast(95%));
                transition: 0.1s;
            }

            button{
                position: absolute;
                top: 50%;
                background-color: transparent;
                border: 0; 
                color: #1973B8;
                cursor: pointer;
                z-index: 100;
            }

            .left-button{
                left: -6px;
            }

            .right-button{
                right: -6px;
            }
        `
    ];

    static properties = {
        listItem: [],
        listPosition: Number,
        lastMovement: Boolean
    }

    constructor() {
        super();
        this.listItem = [
            {text: 'Quiero una cuenta sin comisiones', image: '../../images/img-slider/account.svg',rute: '#'},
            {text: 'Quiero cambiarme de banco', image: '../../images/img-slider/bank.svg',rute: '#'},
            {text: 'Quiero una cuenta para mi nómina', image: '../../images/img-slider/document.svg',rute: '#'},
            {text: 'Quiero calcular mi hipoteca', image: '../../images/img-slider/calculator.svg', rute: '../../mortgageCalculator.html'},
            {text: 'Quiero una cuenta joven con acceso a formación', image: '../../images/img-slider/bonusaccount.svg',rute: '#'},
            {text: 'Quiero una cuenta para mi empresa', image: '../../images/img-slider/team.svg',rute: '#'},
            {text: 'Necesito un préstamo rápido y online', image: '../../images/img-slider/loaneuro.svg',rute: '#'},
            {text: 'Busco una tarjeta de débito o crédito', image: '../../images/img-slider/creditcard.svg',rute: '#'},
            {text: 'Estoy buscando casa', image: '../../images/img-slider/home.svg',rute: '#'},
            {text: 'Busco productos de ahorro e inversión', image: '../../images/img-slider/savings.svg',rute: '#'},
            {text: 'Quiero un seguro', image: '../../images/img-slider/insurance2.svg',rute: '#'},
        ];
        this.listPosition= 0;
        this.lastMovement = true
    }

    render() {
        return html`
            <section>
                <div>
                    <button  @click=${this.moveLeft} type="button" class="left-button"><</button>
                    <ul>
                        ${this.listItem.map(item => html`<a href="${item.rute}" @mouseover=${this.upImage}><img src="${item.image}"><li>${item.text}</li></a>`)}</li>
                    </ul>
                    <button @click=${this.moveRight} type="button" class="right-button">></button>
                </div>
            </section>
        `;
    }  

    upImage(){
        const elements= this.renderRoot.querySelectorAll("a");
        elements.forEach(element => {
            element.onmouseover = () => element.firstChild.style.transform= "translateY(-16px)";
            element.onmouseleave = () => element.firstChild.style.transform= "translateY(0)";
        });
    }

    moveRight(){
        if (this.listPosition<this.listItem.length-6) {
            const element = this.renderRoot.querySelector("ul");
            if (!this.lastMovement) {
                this.listPosition+=2;
                this.lastMovement=true;
            }else{
                this.listPosition++;
            }
            element.style.transform = "translate3d("+-196.666*this.listPosition+"px,0px,0px)";
        }
    }

    moveLeft(){
        if (this.listPosition>0){
            const element = this.renderRoot.querySelector("ul");
            if (!this.lastMovement) {
                this.listPosition-=2;
                this.lastMovement=false;
            }else{
                this.listPosition--;
            }
            element.style.transform = "translate3d("+-196.666*this.listPosition+"px,0px,0px)";
        }
    } 
}
customElements.define('slider-bbva', Slider);
