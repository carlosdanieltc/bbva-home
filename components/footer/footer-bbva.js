import { LitElement, html, css } from 'lit';

export class FooterBbva extends LitElement {
    static styles = [
        css`
            section{
                font-family: BentonSansBBVA-Medium,Helvetica,Arial,sans-serif;
            }

            .section-footer-options>a{
                margin-left: 5%;
            } 

            footer{
                background-color: #072146;
                color: white;
                padding: 2% 7% 5% 7%;
            }

            footer>div{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            footer>div>div{
                display: flex;
                align-items: center;

            }

            .logo-bbva{
                width: 9rem;
                height: 5rem;
            }

            ul{
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: flex-start;
                list-style: none;
                width: 70%;
                padding: 0;
                margin: 0;
            }

            li{
                margin: 0 2rem 0.95rem 0;
            }

            a{
                text-decoration: none;
                color: #49a5e6;
                font-size: 15px;
            }

            a:hover{
                color: white;
            }

            div>p:first-child{
                color: #bdbdbd;
                font-size: 12px;
            }

            div>p:nth-child(2) {
                color: #2dcccd;
            }      
            
            .languages-button{
                font-size: 15px;
                height: 40px;
                background-color: transparent;
                color:white;
                border: 0;
                border-right: 1px solid white;
                padding-right: 24px;
                margin-right: 24px;
            }

            .languages-button:hover{
                cursor: pointer;
            }
        `
    ];

    static properties ={
        items: []
    }

    constructor(){
        super();
        this.items = ['Aviso legal', 'Cookies', 'Datos Personales', 'Informes Legales', 'Servicios de Pago','Tarifas','Tablón de anuncios','Negocio responsable'];
    }

    render() {
        return html`
            <footer>
                <div>
                    <img src="../../images/logo_bbva_blanco.svg" class="logo-bbva">
                    <div>
                        <button class="languages-button">Español</button>
                        <div class="social-networks">
                            Redes Sociales
                        </div>
                    </div>  
                </div>
                <div>
                    <ul>
                        ${this.items.map(item => html`<li><a href="#">${item}</a></li>`)}
                    </ul>
                </div>
                <div class="last-div-footer">
                    <p>Banco Bilbao Vizcaya Argentaria S.A. 2022</p>
                    <p>Creando oportunidades</p>
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-bbva', FooterBbva);
