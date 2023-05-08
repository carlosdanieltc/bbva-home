/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const a=window,c=a.trustedTypes,h=c?c.emptyScript:"",d=a.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:m}),(null!==(l=a.reactiveElementVersions)&&void 0!==l?l:a.reactiveElementVersions=[]).push("1.4.1");const f=window,b=f.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,_="?"+$,x=`<${_}>`,A=document,w=(t="")=>A.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,k=/>/g,M=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),H=/'/g,U=/"/g,B=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),N=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),z=new WeakMap,T=A.createTreeWalker(A,129,null,!1),L=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=C;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,a=r.exec(i),null!==a);)h=r.lastIndex,r===C?"!--"===a[1]?r=P:void 0!==a[1]?r=k:void 0!==a[2]?(B.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=M):void 0!==a[3]&&(r=M):r===M?">"===a[0]?(r=null!=o?o:C,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?M:'"'===a[3]?U:H):r===U||r===H?r=M:r===P||r===k?r=C:(r=M,o=void 0);const d=r===M&&t[e+1].startsWith("/>")?" ":"";n+=r===C?i+x:c>=0?(s.push(l),i.slice(0,c)+"$lit$"+i.slice(c)+$+d):i+$+(-2===c?(s.push(void 0),e):d)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(l):l,s]};class j{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,c]=L(t,e);if(this.el=j.createElement(a,i),T.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=T.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Q:"?"===e[1]?W:"@"===e[1]?X:q})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(B.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),T.nextNode(),l.push({type:2,index:++o});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===_)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)l.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,s){var o,n,r,l;if(e===N)return e;let a=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const c=S(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=I(t,a._$AS(t,e.values),a,s)),e}class V{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);T.currentNode=o;let n=T.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new D(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new J(n,this,t)),this.v.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=T.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,s){var o;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),S(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==O&&S(this._$AH)?this._$AA.nextSibling.data=t:this.k(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=j.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new V(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new j(t)),e}O(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new D(this.S(w()),this.S(w()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,s,o){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=I(this,t,e,0),n=!S(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=I(this,s[i+r],e,r),l===N&&(l=this._$AH[r]),n||(n=!S(l)||l!==this._$AH[r]),l===O?t=O:t!==O&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.P(t)}P(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Q extends q{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===O?void 0:t}}const Y=b?b.emptyScript:"";class W extends q{constructor(){super(...arguments),this.type=4}P(t){t&&t!==O?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class X extends q{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=I(this,t,e,0))&&void 0!==i?i:O)===N)return;const s=this._$AH,o=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==O&&(s===O||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const K=f.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,F;null==K||K(j,D),(null!==(v=f.litHtmlVersions)&&void 0!==v?v:f.litHtmlVersions=[]).push("2.3.1");class G extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new D(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return N}}G.finalized=!0,G._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:G});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:G}),(null!==(F=globalThis.litElementVersions)&&void 0!==F?F:globalThis.litElementVersions=[]).push("3.2.2");class et extends G{static styles=[n`
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
        `];constructor(){super(),this.navScroll()}navScroll(){window.onscroll=function(){const t=document.body.firstElementChild.shadowRoot.firstElementChild;document.body.firstElementChild.shadowRoot.firstElementChild.firstElementChild.firstElementChild.firstElementChild.classList.toggle("imageScroll",window.scrollY>0),t.classList.toggle("headerScroll",window.scrollY>0)}}render(){return R`
            <header>
                <nav>
                    <a href="#"><img src="../images/logo_bbva_blanco.svg" class="logo-bbva"></a>
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
                            <a href="#" class="add-client-content"><img src="../images/addClient.svg" class="add-client-logo"><p>Hazte cliente</p></a>
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
        `}showSearch(){document.body.children[1].changeVisible()}}customElements.define("header-bbva",et);class it extends G{static styles=[n`
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

            
        `];render(){return R`
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
                    <img class="section-promo-image" src="../images/imagen-fondo-0.jpg">
                </div>
            </section>
        `}}customElements.define("principal-section",it);class st extends G{static styles=[n`
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
        `];static properties={items:[]};constructor(){super(),this.items=["Aviso legal","Cookies","Datos Personales","Informes Legales","Servicios de Pago","Tarifas","Tablón de anuncios","Negocio responsable"]}render(){return R`
            <footer>
                <div>
                    <img src="../images/logo_bbva_blanco.svg" class="logo-bbva">
                    <div>
                        <button class="languages-button">Español</button>
                        <div class="social-networks">
                            Redes Sociales
                        </div>
                    </div>  
                </div>
                <div>
                    <ul>
                        ${this.items.map((t=>R`<li><a href="#">${t}</a></li>`))}
                    </ul>
                </div>
                <div class="last-div-footer">
                    <p>Banco Bilbao Vizcaya Argentaria S.A. 2022</p>
                    <p>Creando oportunidades</p>
                </div>
            </footer>
        `}}customElements.define("footer-bbva",st);class ot extends G{static styles=[n`
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

        `];render(){return R`
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
        `}closePopUp(){this.renderRoot.querySelector("aside").style.display="none"}}customElements.define("pop-up",ot);class nt extends G{static styles=[n`
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
        `];static properties={listItem:[],listPosition:Number,lastMovement:Boolean};constructor(){super(),this.listItem=[{text:"Quiero una cuenta sin comisiones",image:"../images/img-slider/account.svg",rute:"#"},{text:"Quiero cambiarme de banco",image:"../images/img-slider/bank.svg",rute:"#"},{text:"Quiero una cuenta para mi nómina",image:"../images/img-slider/document.svg",rute:"#"},{text:"Quiero calcular mi hipoteca",image:"../images/img-slider/calculator.svg",rute:"../../mortgageCalculator.html"},{text:"Quiero una cuenta joven con acceso a formación",image:"../images/img-slider/bonusaccount.svg",rute:"#"},{text:"Quiero una cuenta para mi empresa",image:"../images/img-slider/team.svg",rute:"#"},{text:"Necesito un préstamo rápido y online",image:"../images/img-slider/loaneuro.svg",rute:"#"},{text:"Busco una tarjeta de débito o crédito",image:"../images/img-slider/creditcard.svg",rute:"#"},{text:"Estoy buscando casa",image:"../images/img-slider/home.svg",rute:"#"},{text:"Busco productos de ahorro e inversión",image:"../images/img-slider/savings.svg",rute:"#"},{text:"Quiero un seguro",image:"../images/img-slider/insurance2.svg",rute:"#"}],this.listPosition=0,this.lastMovement=!0}render(){return R`
            <section>
                <div>
                    <button  @click=${this.moveLeft} type="button" class="left-button"><</button>
                    <ul>
                        ${this.listItem.map((t=>R`<a href="${t.rute}" @mouseover=${this.upImage}><img src="${t.image}"><li>${t.text}</li></a>`))}</li>
                    </ul>
                    <button @click=${this.moveRight} type="button" class="right-button">></button>
                </div>
            </section>
        `}upImage(){this.renderRoot.querySelectorAll("a").forEach((t=>{t.onmouseover=()=>t.firstChild.style.transform="translateY(-16px)",t.onmouseleave=()=>t.firstChild.style.transform="translateY(0)"}))}moveRight(){if(this.listPosition<this.listItem.length-6){const t=this.renderRoot.querySelector("ul");this.lastMovement?this.listPosition++:(this.listPosition+=2,this.lastMovement=!0),t.style.transform="translate3d("+-196.666*this.listPosition+"px,0px,0px)"}}moveLeft(){if(this.listPosition>0){const t=this.renderRoot.querySelector("ul");this.lastMovement?this.listPosition--:(this.listPosition-=2,this.lastMovement=!1),t.style.transform="translate3d("+-196.666*this.listPosition+"px,0px,0px)"}}}customElements.define("slider-bbva",nt);class rt extends G{static styles=[n`
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
            
        `];static properties={showSection:Boolean};constructor(){super(),this.showSection=!1}render(){return R`
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
        `}changeVisible(){const t=this.renderRoot.querySelector(".search-base").style;this.showSection?(t.height="0",t.visibility="hidden",t.transition="none"):(t.visibility="visible",t.height="72px",t.transition="0.5s"),this.showSection=!this.showSection}}customElements.define("principal-search",rt);
