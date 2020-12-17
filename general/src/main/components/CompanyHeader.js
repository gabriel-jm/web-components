export default class CompanyHeader extends HTMLElement {
  icon = '&#x260F;'
  
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.render()
  }

  static get observedAttributes() {
    return ['icon', 'page-name']
  }

  querySelector(query) {
    return this.shadowRoot.querySelector(query)
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    const actions = {
      icon: () => {
        this.icon = newValue
        this.querySelector('.title-container span')
          .innerText = newValue
      },
      'page-name': () => {
        this.pageName = newValue
        this.querySelector('h1').innerText = newValue
      }
    }

    name in actions && actions[name]()
  }

  styles() {
    return `
      <style>
        .container {
          background-color: #08c;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: sans-serif;
          padding: 12px 18px;
        }

        .title-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title-container span {
          font-size: 2.2rem;
          margin-right: 10px;
        }

        h1 {
          margin: 0;
        }

        a {
          text-decoration: none;
        }
      </style>
    `
  }

  render() {
    this.shadowRoot.innerHTML = `
      ${this.styles()}

      <div class="container">
        <div class="title-container">
          <span>${this.icon}</span>
          <h1>${this.pageName}</h1>
        </div>

        <div>
          <a>Home</a>
          <a>About</a>
        </div>
      </div>
    `
  }
}
