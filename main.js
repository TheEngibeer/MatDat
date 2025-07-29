import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="logo-container">
      <svg class="logo" viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m399.609 0 10.3844 389.637-193.6532 11.44L24.567 389.637 34.9518 0H399.609ZM292.965 190.05 149.85 188.35l9.6168-96.168h145.3132l-11.8148-96.168H84.467L96.281 283.233l109.6532 8.1832 109.6532-8.1832 11.8148-93.1832Z" fill="#41b883"/>
      </svg>
    </div>
    <h1>Welcome to Vite!</h1>
    <div class="card">
      <button id="counter" type="button">Count is 0</button>
    </div>
    <p class="read-the-docs">
      Click on the button to see the counter in action
    </p>
  </div>
`

let count = 0
const button = document.querySelector('#counter')

button.addEventListener('click', () => {
  count++
  button.textContent = `Count is ${count}`
})