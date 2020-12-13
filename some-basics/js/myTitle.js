// Simple Custom Element

const MyTitle = class extends HTMLElement {
  constructor() {
    super()

    this.innerHTML = '<h2>My Title</h2>'
  }
}

customElements.define('my-title', MyTitle)
