class AlertIcon extends HTMLElement {
  constructor() {
    super()

    const color = this.getAttribute('color') || '#333'
    const width = this.getAttribute('width') || 0
    const height = this.getAttribute('heigth') || 0

    this.innerHTML = (`
      <svg
        color="${color}"
        width="${width}"
        height="${height}"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="${this.className || ''}"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    `)
  }
}

class CloseIcon extends HTMLElement {
  constructor() {
    super()

    const color = this.getAttribute('color') || '#333'
    const width = this.getAttribute('width') || 0
    const height = this.getAttribute('heigth') || 0

    this.innerHTML = (`
      <svg
        color="${color}"
        width="${width}"
        height="${height}"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="${this.className || ''}"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    `)
  }
}

customElements.define('alert-icon', AlertIcon)
customElements.define('close-icon', CloseIcon)
