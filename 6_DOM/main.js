// 1.
// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3

const ulList = document.querySelector('#list')

const firstElement = ulList.children[0].textContent
const lastElement = ulList.children[4].textContent
const secondElement = ulList.children[1].textContent
const fourthElement = ulList.children[3].textContent
const thirdElement = ulList.children[2].textContent

alert(firstElement + ', ' + lastElement + ', ' + secondElement + ', ' + fourthElement + ', ' + thirdElement);

// 2.
// Для сторінки
// <body>
//   <h1>I'am a big header!!!</h1>
//   <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
//   </div>
//   <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
//   </ul>
//   <span>Make me invisible, please!</span>
// </body>

// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.

const h1 = document.querySelector('h1')
const myDiv = document.querySelector('#myDiv')
const myList = document.querySelector('#myList')
const span = document.querySelector('span')

h1.style.backgroundColor = 'green'
myDiv.children[0].style.fontWeight = 'bold'
myDiv.children[1].style.color = 'red'
myDiv.children[2].style.textDecoration = 'underline'
myDiv.children[3].style.fontStyle = 'italic'
myList.style.listStyle = 'none'
myList.style.display = 'flex'
span.style.display = 'none'

// 3.
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
// </body>

const main = document.createElement('main')
main.classList.add('mainClass', 'check', 'item')
document.body.appendChild(main);

const myDiv = document.createElement('div')
myDiv.id = 'myDiv'
main.appendChild(myDiv)

const p = document.createElement('p')
p.textContent = 'First paragraph'
myDiv.appendChild(p)


// 4.
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/Jjabvez

const fullName = document.querySelector('.text-data')
const phone = fullName.nextElementSibling
const date = phone.nextElementSibling
const eMail = date.nextElementSibling
const output = document.querySelector('.out')
const btn = document.querySelector('.btn')

function inputFormData() {
	let dataArr = [fullName.value, phone.value, date.value, eMail.value]
	console.log(dataArr)
}

btn.addEventListener('click', inputFormData)

// 5.
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/abzLvqo

const circle = Array.from(document.querySelectorAll('.circle'))

for (let i = 0; i < circle.length; i++) {
	const info = circle[i].getAttribute('data-anim')
	circle[i].classList.add(info);
}
console.log(circle);

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
price.textContent = defaultPrice.toFixed(2)

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
			price.textContent = gradients[i].getAttribute('data-price')
		}
	}
}

colors.forEach(color => {
	color.addEventListener('click', colorChange)
})

// Зображення

// ⭐⭐⭐
// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Зробити електронний годинник у такому стилі.
// https://user-images.githubusercontent.com/9075641/182206079-7c4aa5f0-50d9-4808-bec7-6d3af7bdada9.gif
