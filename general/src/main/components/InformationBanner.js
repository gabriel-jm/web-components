export default class InformationBanner extends HTMLElement {
  constructor() {
    super()

    this.render()
  }

  render() {
    const templateRef = document.querySelector('#information-banner-template')

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.append(templateRef.content.cloneNode(true))
  }
}