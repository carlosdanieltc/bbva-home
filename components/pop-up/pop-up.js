import { LitElement, html, css } from 'lit';

export class PopUp extends LitElement {
    static styles = [
        css`
            aside{
                position: fixed;
                width: 18.5em;
                height: 29em;
                background-color: #fff;
                bottom: 1rem;
                margin-left: 100%;
                font-family: BentonSansBBVA-Medium,Helvetica,Arial,sans-serif;
                border-top: 2px solid #043263;
                border-bottom: 2px solid #043263;
                animation: modal 1s 1s;
                animation-fill-mode: forwards;
                z-index: 100;
            }

            @keyframes modal{
                from{
                    transform: translateX(0);
                }
                to{
                    transform: translateX(-105%);
                }
            }

            .close-pop-up-container{
                display: flex;
                justify-content: flex-end;
                margin: 20px 20px 0 0;
            }

            .close-pop-up{
                background-color: transparent;
                font-size:16px;
            }

            .close-pop-up:hover{
                cursor: pointer;
            }

            .pop-up-container{
                display: flex;
                align-items: center;
                flex-direction: column;
                margin: 0 20px 0 20px;
            }

            div>div>h1{
                font-size: 26px;
                margin: 0 20px 0 20px;
            }

            .pop-up-container-description{
                display: flex;
                flex-direction: column;
                text-align: center;
            }

            p{
                font-size: 15px;
            }

            button{
                border: 0;
            }

            .green-button-section{
                height: 3.5rem;
                font-size: 15px;
                width: 9rem;
                color: white;
                background-color: #028484;
                margin-top: 20px;
            }

            .green-button-section:hover{
                background-color: #02A5A5;
                cursor: pointer;
            }

            a{
                color: #1973b8;
                text-decoration: none;
            }

            a:hover{
                color: #043263;
            }

            div>a{
                margin-top: 28px;
                display: flex;
                justify-content: center;
            }

        `
    ];

    render() {
        return html`
            <aside>
                <div class="close-pop-up-container">
                    <button @click=${this.closePopUp} type="button" class="close-pop-up">X</button>
                </div>
                <div class="pop-up-container">
                    <div class="pop-up-container-description">
                        <h1>Ahorra en combustible</h1>
                        <p>Con la <b>Cuenta Online Sin Comisiones & Tarjeta Repsol más Visa Débito, hasta 7 cts.€/L</b> en carburante al repostar en Estaciones de Servicio <b>Repsol, Campsa y Petronor.</b></p>
                        <p><b>Y ahora, sin comisiones para siempre si contratas antes del 07/11/22</b></p>
                    </div>
                    <button type="button" class="green-button-section">Hazte cliente</button>
                    <a href="#">Más información</a>
                </div>
            </aside>
        `;
    }

    closePopUp(){
        this.renderRoot.querySelector("aside").style.display= "none";
    }
}
customElements.define('pop-up', PopUp);
