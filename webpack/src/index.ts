import { SuperElement } from './super-element/index'
import { css, html } from './template-functions/index'

class Article extends SuperElement {
  constructor () {
    super()

    this.select('h1').on('click', () => console.log('hi'))
  }

  render () {
    return html`<h1>Hello World</h1>`
  }
}

customElements.define('my-article', Article)

class MyTitle extends HTMLElement {

  static get observedAttributes() {
    return ['theme']
  }

  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.shadowRoot && (this.shadowRoot.innerHTML = this.html)

    this.init()
  }

  get css() {
    return css`
      :host {
        display: block;
        color: white;
        background-color: #444;
      }

      :host([theme=light]) {
        color: #444;
        background-color: white;
      }

      h1, ::slotted(h1) {
        background-color: var(--bg-color);
      }
    `
  }

  get html() {
    return html`
      <style>${this.css}</style>

      <slot name="titulo"></slot>
      <slot></slot>
      <button>Set to light</button>
    `
  }

  get theme() {
    return this.getAttribute('theme') || ''
  }

  set theme(value: string) {
    this.setAttribute('theme', value)
  }

  init() {
    this.shadowRoot?.querySelector('button')?.addEventListener('click', () => {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
    })
  }

  connectedCallback() {}

  disconnectedCallback() {}

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    console.log(name, oldValue, newValue)
  }
}

customElements.define('my-title', MyTitle)
