export default class StudentAttendanceTable extends HTMLElement {
  constructor() {
    super()

    this.innerHTML = this.loading
  }

  get loading() {
    return 'loading...'
  }

  get errorText() {
    return 'Unable to retrive students data.'
  }

  connectedCallback() {
    this.fetchStudentsData()
  }

  fetchStudentsData() {
    fetch('./database/students.json')
      .then(response => response.json())
      .then(jsonData => this.generateTable(jsonData))
      .catch(error => {
        this.innerText = this.errorText
        console.log(error)
      })
  }

  generateTable(students) {
    const rows = students.map(
      (student, index) => this.getTableRow(index, student.name)
    )

    const table = document.createElement('table')
    table.innerHTML = rows.join('')

    this.appendToShadowDOM(table)
  }

  getTableRow(index, name) {
    return `
      <tr>
        <td>${index + 1}</td>
        <td>${name}</td>
        <td>
          <input type="checkbox" name="${index}-attendance" />
        </td>
      </tr>
    `
  }

  appendToShadowDOM(html) {
    this.innerHTML = ''

    const shadowRoot = this.attachShadow({ mode: 'open' })

    shadowRoot.append(html)
  }
}
