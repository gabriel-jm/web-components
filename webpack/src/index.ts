import { SuperElement } from './super-element/index'

class Article extends SuperElement {
  constructor () {
    super()
  }

  render () {
    return '<h1>Hello World</h1>'
  }
}

customElements.define('my-article', Article)
