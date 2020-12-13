export default class CustomButton extends HTMLElement {
  timesCliked = 0
  
  constructor() {
    super()

    this.render()
  }

  getTimesClicked() {
    return `Times clicked: ${this.timesCliked}`
  }

  connectedCallback() {
    this.querySelector('button')
      .addEventListener('click', this.handleClick.bind(this))
  }

  disconnectedCallback() {
    this.querySelector('button')
      .removeEventListener('click', this.handleClick)
  }

  handleClick() {
    this.timesCliked++
    this.querySelector('span')
      .innerText = this.getTimesClicked()
  }

  render() {
    const template = `
      <button>Click</button>
      <span>${this.getTimesClicked()}</span>
    `

    this.innerHTML = template
  }
}
