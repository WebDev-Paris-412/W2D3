/**
 * in CSS
 * #
 */

const tableBodyElement = document.querySelector("#table-body")
const firstProduct = tableBodyElement.querySelector(".product")
const totalPriceElement = document.querySelector("span.total")
const calculateButton = document.getElementById("calculate-price")
const createProductButton = document.querySelector("#create-button")
const productNameInput = document.querySelector("#create-name")
const productPriceInput = document.querySelector("#create-price")
const productTemplate = document.querySelector("#product-template")

/**
 * getElementsByClassName
 */

// console.log(tableBodyElement, firstProduct, allProducts)

// allProducts.forEach((product) => {
// 	const localName = product.querySelector(".name")
// 	localName.style.backgroundColor = getRandomColor()
// })

// firstProduct.textContent = 9999999
// const anotherSelector = document.querySelector('.price span')

function getRandomColor() {
	return `hsl(${Math.random() * 360}, 60%, 40%)`
}

function calculateThePrice(event) {
	const allProducts = tableBodyElement.querySelectorAll(".product")

	let totalPrice = 0
	allProducts.forEach((product) => {
		const localPrice = product.querySelector(".price span").textContent
		const localQuantity = product.querySelector(".quantity input").value
		console.log(localPrice, localQuantity)
		const localTotal = localPrice * localQuantity
		totalPrice += localTotal
	})
	totalPriceElement.textContent = totalPrice
}

calculateButton.addEventListener("click", calculateThePrice)
createProductButton.addEventListener("click", createProduct)

attachDeleteEvent()

function createProduct(event) {
	const name = productNameInput.value
	const price = productPriceInput.value
	console.log(productNameInput.value)
	console.log(productPriceInput.value)
	const clone = productTemplate.content.cloneNode(true)
	clone.querySelector("td.name").textContent = name
	clone.querySelector("td.price span").textContent = price
	clone.querySelector("button.delete").addEventListener("click", deleteProduct)

	tableBodyElement.append(clone)

	// const tableRow = document.createElement('tr')

	// const newTableRow = `
	// <tr class="product">
	// 					<td class="name">${name}</td>
	// 					<td class="price"><span>${price}</span> €</td>
	// 					<td class="quantity"><input type="number" value="0" min="0" /></td>
	// 					<td><button class="btn delete">Delete</button></td>
	// 					<td class="local-price"></td>
	// 				</tr>
	// `

	// tableBodyElement.innerHTML += newTableRow
	productNameInput.value = ""
	productPriceInput.value = ""
	// attachDeleteEvent()
}

function attachDeleteEvent() {
	const allButtons = document.querySelectorAll("button.btn.delete")
	allButtons.forEach((button) => {
		button.addEventListener("click", deleteProduct)
	})
}
// calculateThePrice()

function deleteProduct(event) {
	const clickedButton = event.target
	const productRow = clickedButton.closest("tr.product")
	productRow.remove()
	calculateThePrice()
}
