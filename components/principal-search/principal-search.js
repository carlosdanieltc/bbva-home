import { LitElement, html, css } from 'lit';

export class PrincipalSearch extends LitElement {
    static styles = [
        css`
            .search-base{
                background-color: #004481;
                width: 100%;
                height: 0px;
                visibility: hidden;
            }

            .container-search-bar{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }

            button{
                background-color: transparent;
                border: 0;
                color: #fff;
                font-size: 24px;
            }

            button:hover{
                cursor: pointer;
            }

            .container{
                height: 100%;
            }

            input{
                height: 100%;
                font-size: 15px;
                width: 65%;
                padding-left: 15px;
                background-color: transparent;
                border: 0;
                color: #fff;
            }

            input::placeholder{
                color: #fff;
                opacity: .5;
            }

            input:focus{
                outline: none;
            }
            
        `
    ];

    static properties= {
        showSection : Boolean
    }

    constructor(){
        super();
        this.showSection = false;
    }

    render() {
        return html`
            <div class="search-base">
                <div class="container">
                    <div class="container-search-bar">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" height="20px" width="20px">
                            <defs><style>.bbvaicn{fill:#fff}</style></defs>
                            <path class="bbvaicn" d="M182.85 162.85a90 90 0 1 0-20 20L220 240l20-20zM150 110a40 40 0 0 0-40-40V50a60 60 0 0 1 60 60z"></path> 
                        </svg>
                        <input type="text" placeholder="Buscar aquí">
                        <button type="button" @click=${this.changeVisible}>X</button>
                    </div>
                </div>
            </div>
        `;
    } 

    changeVisible(){
        const myClass = this.renderRoot.querySelector(".search-base").style;
        if (this.showSection) {
            myClass.height = "0";
            myClass.visibility = "hidden";
            myClass.transition = "none";
        }else{
            myClass.visibility = "visible";
            myClass.height = "72px";
            myClass.transition = "0.5s";
        }
        this.showSection = !this.showSection;
    }
}
customElements.define('principal-search', PrincipalSearch);
