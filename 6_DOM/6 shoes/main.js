// 6.
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/dyjyeGO

const gradients = document.querySelectorAll('.gradient')
const shoesImg = document.querySelectorAll('.shoe')
const colors = document.querySelectorAll('.colors span')
const price = document.querySelector('#outprice')

const defaultColor = 'blue'
const defaultGradient = document.querySelector(`.gradient[color="${defaultColor}"]`)
const defaultPrice = parseFloat(defaultGradient.getAttribute('data-price'))
price.textContent = defaultPrice + ' $'

function colorChange() {
	for (let i = 0; i < colors.length; i++) {
		colors[i].classList.remove('active')
	}
	this.classList.add('active')

	const color = this.getAttribute('color')

	for (let i = 0; i < shoesImg.length; i++) {
		shoesImg[i].classList.remove('show')
		if (shoesImg[i].getAttribute('color') === color) {
			shoesImg[i].classList.add('show')
		}
	}

	for (let i = 0; i < gradients.length; i++) {
		gradients[i].classList.remove('second')
		if (gradients[i].getAttribute('color') === color) {
			gradients[i].classList.add('second')
			price.textContent = parseFloat(gradients[i].getAttribute('data-price')) + ' $'
		}
	}
}

colors.forEach(color => {
	color.addEventListener('click', colorChange)
})


