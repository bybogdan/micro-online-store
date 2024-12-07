import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

const items = [
  { name: 'Red car 🚘', price: 100 },
  { name: 'Yellow gun 🔫', price: 50 }
]

let cart = 0

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Micro Online Store 🏪</h1>
    <h2>
    Cart 🛒 <span id="cart">${cart}</span>
    </h2>

     <div id="items">
     ${items.map(item => `
      <div class="item">
        <p>${item.name}</p>
        <p id="price" >${item.price}</p>
        <button id="addToCart" >Add to cart</button>
      </div>
     `)}
    </div>
  </div>
`


const buttons = document.querySelectorAll('#addToCart')

function addItemToCard () {

}

buttons.forEach(button => {
  button.addEventListener('click', (node) => {
    const btn = node.target
    const btnParent = btn.closest('.item')
    const priceNode = btnParent.querySelector('#price')
    const price = priceNode.textContent
    cart += +price

    const cartNode = document.querySelector('#cart')
    cartNode.textContent = cart
  })
})
  </div>
`
