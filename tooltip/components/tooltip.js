const template = document.createElement('template')
template.innerHTML = (`
  <link rel="stylesheet" href="../css/tooltip.css" />

  <div class="tooltip-container">
    <alert-icon class="icon"></alert-icon>
    <close-icon class="icon" style="display: none"></close-icon>

    <div class="notify-container">
      <slot />
    </div>
  </div>
`)

class Tooltip extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const alertBtn = this.shadowRoot.querySelector('alert-icon')
    const closeBtn = this.shadowRoot.querySelector('close-icon')

    alertBtn.addEventListener('click', () => this.tooltip(true))
    closeBtn.addEventListener('click', () => this.tooltip(false))

    const customBgColor = this.getAttribute('bg-color')
    const customFontColor = this.getAttribute('font-color')

    if(customBgColor) {
      this.shadowRoot.querySelector('.notify-container').style.backgroundColor = customBgColor
    }

    if(customFontColor) {
      this.shadowRoot.querySelector('.notify-container').style.color = customFontColor
    }
  }

  tooltip(expandState) {
    const tooltipMessage = this.shadowRoot.querySelector('.notify-container')
    const alertBtn = this.shadowRoot.querySelector('alert-icon')
    const closeBtn = this.shadowRoot.querySelector('close-icon')

    if(expandState) {
      tooltipMessage.style.transform = 'scale(1)'
      alertBtn.style.display = 'none'
      closeBtn.style.display = 'block'

      expandState = false
    } else {
      tooltipMessage.style.transform = 'scale(0)'
      alertBtn.style.display = 'block'
      closeBtn.style.display = 'none'
    }
  }
}

customElements.define('tool-tip', Tooltip)
