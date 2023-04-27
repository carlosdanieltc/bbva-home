import { LitElement, html, css } from 'lit';

export class MortgageCalculatorPrincipal extends LitElement {
    static styles = [
        css`
            *{
                font-family: BentonSansBBVA-Medium,Helvetica,Arial,sans-serif;
            }

          section{
            display: flex;
            justify-content: center;
            margin: 35px 0 35px 0;
          }

          .simulator{
            display: flex;
            width: 1176px;
            background-color: wheat;
          }

          .left-section{
            background-color: darkseagreen;
            width: 50%;
          }

          .right-section{
            background-color: rgb(244, 244, 244);
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 0vw 0.5vw 0.8vw 0.5vw;
          }

          h4{
            font-size: 15px;
          }

          .right-section-titles{
            width: 90%;
            display: flex;
            justify-content: space-around;
          }

          .right-section-title{
            font-size: 14px;
            width: 50%;
            text-align: center;
            padding: 1.75vw 0 1.75vw 0;
            margin: 0;
          }
          
          .right-section-title-1{
            color: #004481;
            border-bottom: 2px solid #004481;
          }

          .right-section-title-2{
            color: #d3d3d3;
            border-bottom: 2px solid #d3d3d3;
          }
        `
    ];

    render() {
        return html`
            <section>
                <div class="simulator">
                    <article class="left-section">
                        <div>
                            <h4>¿Eres cliente de BBVA?</h4>
                            <input type="radio" name="client" value="true"> <span>No soy cliente de BBVA</span>
                            <input type="radio" name="client" value="false"> <span>Soy cliente de BBVA</span>
                        </div>
                        <div>
                            <h4>¿Qué tipo de vivienda quieres comprar?</h4>
                            <input type="radio" name="housing-type" value="true"> <span>Segunda mano</span>
                            <input type="radio" name="housing-type" value="false"> <span>Obra nueva</span>
                        </div>
                        <div>
                            <h4>¿Vas a vivir allí?</h4>
                            <input type="radio" name="home" value="true"> <span>Sí, será mi vivienda habitual</span>
                            <input type="radio" name="home" value="false"> <span>No, es segunda vivienda o inversión</span>
                        </div>
                        <div>
                            <h4>¿Cuánto cuesta la vivienda?</h4>
                            <input type="number" name="number" value="150000€" amount="150000" label="Precio de la vivienda" maxlength="8">
                        </div>
                    </article>

                    <article class="right-section">
                        <div class="right-section-titles">
                            <h2 class="right-section-title right-section-title-1">Hipoteca variable</h2>
                            <h2 class="right-section-title right-section-title-2">Hipoteca fija</h2>
                        </div>
                        <div>
                            <div class="">
                                
                            </div>
                            <div class="">
                                
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        `;
    }
}
customElements.define('mortgage-calculator-principal', MortgageCalculatorPrincipal);
