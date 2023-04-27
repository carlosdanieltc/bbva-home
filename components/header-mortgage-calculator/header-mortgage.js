import { LitElement, html, css } from 'lit';

export class HeaderMortgage extends LitElement {
    static styles = [
        css`
            *{
                font-family: BentonSansBBVA-Medium,Helvetica,Arial,sans-serif;
                font-size: 15px;
            }
            
            header{
                background-color: #072146;
                color: white;
            }

            .logo-bbva{
                width: 4rem;
                height: 2rem;
                margin: 0 1rem 0 1rem;
            }

            nav{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            div{
                display: flex;
                align-items: center;
            }

            h1{
                width: 80vw;
                text-align: right;
                padding-right: 16px;
            }

            .close-section{
                text-decoration: none; 
                color: white;
                background-color: #02A5A5;
                width: 64px;
                text-align: center;
                line-height: 64px;
            }
        `
    ];

    render() {
        return html`
            <header>
                <nav>
                    <div>
                        <a href="../../index.html"><img src="../../images/logo_bbva_blanco.svg" class="logo-bbva"></a>
                        <h1>Simulador de hipoteca</h1>
                    </div>
                    <a href="../../index.html" class="close-section">X</a>
                </nav>
            </header>
        `;
    }
    
}

customElements.define('header-mortgage', HeaderMortgage);
