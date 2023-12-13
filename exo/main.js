const cubeContainer = document.querySelector("main")
const amountOfCubesInput = document.querySelector("#quantity")
const cubeColorInput = document.querySelector("#color")
const createButton = document.querySelector("#create")
const resetButton = document.querySelector("#reset")
const removeButton = document.querySelector("#remove")

// const cube = document.createElement("div")

// cube.classList.add("cube")

// cubeContainer.append(cube)

createButton.addEventListener("click", addCubes)
resetButton.addEventListener("click", reset)
removeButton.addEventListener("click", removeSelected)

function removeSelected(event) {
	const allSelected = document.querySelectorAll(".cube.selected")
	allSelected.forEach((element) => {
		element.remove()
	})
}
function reset(event) {
	cubeContainer.innerHTML = ""
}

function addCubes(event) {
	const quantity = Number(amountOfCubesInput.value)
	const color = cubeColorInput.value
	for (let i = 0; i < quantity; i++) {
		const div = document.createElement("div")
		div.classList.add("cube")
		div.style.background = color
		div.addEventListener("click", selectCube)
		cubeContainer.append(div)
	}
}

function selectCube(event) {
	console.log(event.target)
	const cube = event.target
	cube.classList.toggle("selected")
}
