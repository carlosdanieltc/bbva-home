import { LitElement, html, css } from "lit";

class HeaderBBVA extends LitElement {
    static styles = [
        css`
            header{
                background-color: #072146;
                display: flex;
                justify-content: space-between;
                color: white;
                font-family: BentonSansBBVA-Medium,Helvetica,Arial,sans-serif;         
                width: 100%;
                height: 87px;
                transition-duration: 0.5s; 
                z-index: 100;
            }

            .headerScroll{
                width: 100%;
                height: 56px;
                transition-duration: 0.5s; 
                position: fixed;
            }

            .logo-bbva{
                width: 9rem;
                height: 5rem;
                margin: 0 1rem 0 1rem;
                transition-duration: 0.5s;
            }

            .imageScroll{
                width:4rem;
                transition-duration: 0.5s;
            }
            
            nav{
                display: flex;
                align-items: center;
                margin: 0 4em 0 4em;
            }

            ul{
                display: flex;
                list-style: none;
                align-items: center;
                padding: 0;
            }

            li{
                margin: 0 1rem 0 1rem;
            }

            .green-button-header{
                height: 3.5rem;
                width: 7.5rem;
                color: white;
                border: 0;
                background-color: #028484;
            }

            button:hover{
                background-color: #02A5A5;
                cursor: pointer;
            }

            a{
                color: #626262;
                text-decoration: none;
            }

            .menu-container{
                display: flex;
                align-items: center; 
                color: #fff;
            }

            .add-client-content{
                display: flex;
                align-items: center;
                color: #f8cd51;
            }
            
            .add-client-logo{
                height: 1.3em;
                width: 1.3em;
                margin-right: 0.5em;
                filter: brightness(0) saturate(100%) invert(78%) sepia(13%) saturate(1766%) hue-rotate(2deg) brightness(105%) contrast(94%);
            }

            li>a:hover{
                color: #fff;
                filter:  grayscale(100%) brightness(200%);
            }

            .header__icon{
                margin-left: 8px;
            }
        `
    ];

    constructor(){
        super();
        this.navScroll();
    }

    navScroll(){
        window.onscroll = function() {
            const myHeader= document.body.firstElementChild.shadowRoot.firstElementChild;
            const myImage= document.body.firstElementChild.shadowRoot.firstElementChild.firstElementChild.firstElementChild.firstElementChild;

            myImage.classList.toggle("imageScroll", window.scrollY > 0);
            myHeader.classList.toggle("headerScroll", window.scrollY > 0);
        };
    }

    render() {
        return html`
            <header>
                <nav>
                    <a href="#"><img src="../../images/logo_bbva_blanco.svg" class="logo-bbva"></a>
                    <ul>
                        <li>
                            <a href="#" style="color: white">PERSONAS</a>
                        </li>
                        <li>
                            <a href="#">AUTÓNOMOS Y EMPRESAS</a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li>
                            <a href="#" class="add-client-content"><img src="../../images/addClient.svg" class="add-client-logo"><p>Hazte cliente</p></a>
                        </li>
                        <li>
                            <button @click=${this.ChangeColor} type="button" class="green-button-header">Acceso</button>
                        </li>
                        <li>
                            <a href="#" @click=${this.showSearch}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" height="20px" width="20px">
                                <defs><style>.bbvaicn{fill:#fff}</style></defs>
                                <path class="bbvaicn" d="M182.85 162.85a90 90 0 1 0-20 20L220 240l20-20zM150 110a40 40 0 0 0-40-40V50a60 60 0 0 1 60 60z"></path>
                            </svg></a>
                        </li>
                        <li>
                            <a href="#" class="menu-container">Menú
                                <svg class="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" height="24px" width="24px">
                                    <defs><style>.bbvaicn{fill:#fff}</style></defs>
                                    <g>
                                        <polygon class="bbvaicn" points="210.37 80.12 20.37 80.12 20.37 50.12 240.37 50.12 210.37 80.12"></polygon>
                                        <polygon class="bbvaicn" points="180.37 145.12 20.37 145.12 20.37 115.12 210.37 115.12 180.37 145.12"></polygon>
                                        <polygon class="bbvaicn" points="150.37 210.12 20.37 210.12 20.37 180.12 180.37 180.12 150.37 210.12"></polygon>
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        `;
    }

    showSearch(){
        document.body.children[1].changeVisible(); 
    }
}
customElements.define('header-bbva', HeaderBBVA);
