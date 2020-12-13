/* For CSS:
  - Its possible to add a link tag or @import to use external CSS Stylesheets
  - CSS custom properties pass through the shadowDOM  
  - Some especial selectors
    :host -> shadowRoot
    :host(.class) -> shadowRoot with some class
    :host(:hover) -> Hover effect on shadowRoot
    ... and so on.
    :host-context(<selector>) -> it applies a given style based on parents selector context
    ::slotted(<selector>) -> it applies to a slot element for the given selector
*/
const template = document.createElement('template')
template.innerHTML = (`
  <style>
    h2 {
      color: #b33;
    }
    ::slotted(*) {
      color: #333
    }
  </style>

  <h2></h2>
  <div>
    <slot></slot>
  </div>
  <div>
    Price: <slot name="price"></slot>
  </div>
  <button>Buy it!</button>
  <br/><br/>
`)

class MyProduct extends HTMLElement {

  // Necessary to attributeChangedCallback Works
  static get observedAttributes() {
    return ['name']
  }

  get name() {
    return this.getAttribute('name')
  }

  set name(value) {
    this.setAttribute('name', value)
  }

  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(
      template.content.cloneNode(true)
    )
    this.shadowRoot.querySelector('h2').innerHTML = this.name
  }

  // Life cicle method - when the element is placed in the DOM
  connectedCallback() {
    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new Event('buy'))
    })
  }

  // Life cicle method - when the element is removed from the DOM
  disconnectedCallback() {
    this.shadowRoot.innerHTML = ''
  }

  // Life cicle method - when some attribute is changed
  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === 'name') {
      this.shadowRoot.querySelector('h2').innerHTML = newValue
    }
  }
}

// Component Tag Name most have at least one "-"(dash)
customElements.define('my-product', MyProduct)

/* Called when a web component is defined -> customElements.define
customElements.whenDefined('my-product', MyProduct).then(() => {
  console.log('defined')
})*/
