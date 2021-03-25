interface ShadowMode {
  mode: 'open' | 'closed'
}

interface SelectedElement extends Element {
  on(
    eventType: string,
    listener: EventListener | EventListenerObject,
    options?: EventListenerOptions
  ): void
}

export class SuperElement extends HTMLElement { 
  select (query: string) {
    const element = this.root.querySelector(query) as SelectedElement
    element.on = (eventType, listener, options) => {
      element.addEventListener(eventType, listener, options)
    }

    return element
  }

  get root () {
    return this.shadowRoot ?? this
  }

  constructor ({ mode }: ShadowMode  = { mode: 'open' }) {
    super()

    this.attachShadow({ mode })

    if(this.render)
      this.root.innerHTML = this.render()
  }

  render() {
    return ''
  }
}
