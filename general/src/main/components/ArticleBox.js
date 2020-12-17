const styles = `
  div {
    background-color: #eee;
    color: #444;
    font-family: sans-serif;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 10px auto;
    max-width: 550px;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  header {
    padding: 20px;
    border-bottom: 1px solid #ccc;
  }

  section {
    padding: 20px;
  }

  ::slotted(*) {
    margin: 0;
  }

  ::slotted([slot=title]) {
    margin-bottom: 5px;
  }

  ::slotted([slot=author]) {
    color: #aaa;
    font-weight: normal;
    font-style: italic;
  }

`

export default class ArticleBox extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>

      <div>
        <header>
          <slot name="title">
            <h1>Title</h1>
          </slot>
          <slot name="author">
            <h4>Author</h4>
          </slot>
        </header>

        <section>
          <slot name="body">
            <p>Article text.</p>
          </slot>
        </section>
      </div>
    `
  }
}
