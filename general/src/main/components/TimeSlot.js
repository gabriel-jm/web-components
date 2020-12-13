export default class TimeSlot extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.append(
      this.render()
    )
  }

  render() {
    const template = document.createElement('template')
    template.innerHTML = `
      <div>
        <div>
          <input type="radio" name="timeslot" value="slot1" checked> 9:00 
          AM - 11:00 AM
        </div>
        <div>
          <input type="radio" name="timeslot" value="slot2"> 11:00 AM - 
          1:00 PM
        </div>
        <div>
          <input type="radio" name="timeslot" value="slot3"> 1:00 PM - 3:00    
          PM
        </div>
      </div>
    `

    return template.content.cloneNode(true)
  }
}
