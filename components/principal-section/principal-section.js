import { LitElement, html, css } from 'lit';

export class PrincipalSection extends LitElement {
    static styles = [
        css`
            section{
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                font-family: BentonSansBBVA-Medium,Helvetica,Arial,sans-serif;
            }

            section>div{
                display: flex;  
                flex-direction: column;
                width: 48vw;
            }

            .section-info-principal{
                margin-left: 5rem;
                padding: 2.5vw 3.8vw 2.5vw 3.8vw; 
            }

            .section-info-principal>a{
                margin: 1em 0 3em 0;
            }

            section>div>ul{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-left: 2vw;
            }

            .section-subtitle{
                font-size: 16px;
                color: #5ac4c4;
            }

            .section-title{
                font-size: 40px;
                margin: 0;
                color: #004481;
            }

            div>a{
                color: #1973b8;
            }

            .section-beneficios>li{
                margin-top: 1em;
            }

            .section-last-options{
                display: flex;
                align-items: center;
            }

            .section-last-options>a{
                margin-left: 5%;
            }

            a{
                text-decoration: none;
            }

            a:hover{
                color: #043263;
            }

            .green-button-section{
                height: 3.5rem;
                width: 9rem;
                border: 0;
                font-size: 15px;
                color: white;
                background-color: #028484;
            }

            button:hover{
                background-color: #02A5A5;
                cursor: pointer;
            }

            ul{
                display: flex;
                list-style: none;
                align-items: center;
                padding: 0;
            }

            
        `
    ];

    render() {
        return html`
            <section>
                <div class="section-info-principal">
                    <h3 class="section-subtitle">Cuenta Online Sin Comisiones</h3>
                    <h1 class="section-title">La cuenta sin comisiones y sin condiciones</h1>
                    <ul class="section-beneficios">
                        <li>La cuenta que no te pide nada. Ni nómina, ni recibos. NADA.</li>
                        <li>Y ahora, con el Plan Invita a un Amigo, podrás ganar hasta 350 € por traer a tus amigos a BBVA y ellos se podrán llevar 15 € cada uno.</li>
                    </ul>
                    <a href="#">Consulta condiciones</a>
                    <div class="section-last-options">
                        <button type="button" class="green-button-section">Hazte cliente</button>
                        <a href="#">Más información</a>
                    </div>
                </div>
                <div>
                    <img class="section-promo-image" src="../../images/imagen-fondo-0.jpg">
                </div>
            </section>
        `;
    }
}
customElements.define('principal-section', PrincipalSection);
