// 7. BROWSER OBJECT MODEL (BOM). EVENTS
// 📀📀📀

// 7-1.
// За допомогою методів об’єкта window створити:
//         1) нове вікно розміром 300х300 пікселів.
//         2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
//         3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
//         4) із затримкою 2 сек закрийте вікно.

 var newWindow = window.open('http://127.0.0.1:5500/7_BOM_event/index.html', 'newWindow', 'width=300, height=300')
 setTimeout(function () {
	newWindow.resizeTo(500, 500)
 	setTimeout(function () {
 		newWindow.moveTo(200, 200)
		setTimeout(function () {
 			newWindow.close()
 		}, 2000)
	}, 2000)
}, 2000)

// 7-2.
// Для заданої HTML-сторінки:
// <p id ='text'>I learning JavaScript events!</p>
// <div>
//         <button . . . . . >Change style!</button>
// </div>

// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".

const btn = document.querySelector('.btn')
const text = document.querySelector('#text')

function changeCSS() {
	text.classList.toggle('active')
}
btn.addEventListener('click', changeCSS)

// 7-3.
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.
// https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png

const btns = document.querySelectorAll('.button')
const changeLink = document.querySelector('.change-txt')

btns[0].addEventListener('click', function () {
	document.body.style.backgroundColor = 'blue'
})
btns[1].addEventListener('dblclick', function () {
	document.body.style.backgroundColor = 'pink'
})
btns[2].addEventListener('mousedown', function () {
	document.body.style.backgroundColor = 'brown'
})
btns[2].addEventListener('mouseup', function () {
	document.body.style.backgroundColor = 'white'
})
changeLink.addEventListener('mouseover', function () {
	document.body.style.backgroundColor = 'yellow'
})
changeLink.addEventListener('mouseout', function () {
	document.body.style.backgroundColor = 'white'
})

// 7-4.
// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
// https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png

const names = document.querySelector('#names')
const deleteBtn = document.querySelector('.delete-btn')

deleteBtn.addEventListener('click', function () {
	const selectedOption = names.options[names.selectedIndex]
	selectedOption.remove()
})

// 7-5.
// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
// Приклад роботи:
// https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png

const btnLive = document.querySelector('.live-btn')
const txtContainer = document.querySelector('.txt-container')

function mouseOn() {
	const mouseOnText = document.createElement('p')
	mouseOnText.textContent = 'Mouse on me!'
	txtContainer.appendChild(mouseOnText)
}
function mousePressed() {
	const mousePressed = document.createElement('p')
	mousePressed.textContent = 'I was pressed'
	txtContainer.appendChild(mousePressed)
}
function mouseNotOn() {
	const mouseNotOn = document.createElement('p')
	mouseNotOn.textContent = 'Mouse is not on me!'
	txtContainer.appendChild(mouseNotOn)
}

btnLive.addEventListener('mouseover', mouseOn)
btnLive.addEventListener('click', mousePressed)
btnLive.addEventListener('mouseout', mouseNotOn)

// 7-6.
// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// https://user-images.githubusercontent.com/9075641/228463011-5302f615-86e6-41dc-b09a-62bed3564596.png

const height = document.querySelector('.height')
const width = document.querySelector('.width')

function sizeChange() {
	height.textContent = 'Height: ' + window.innerHeight
	width.textContent = 'Width: ' + window.innerWidth
}
window.addEventListener('resize', sizeChange)

// 7-7.
// На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
// Код HTML-сторінки:
// <select name="country" id="country">
//         <option value="ger">Germany</option>
//         <option value="usa">USA</option>
//         <option value="ukr">Ukraine</option>
// </select>

// <select name="cities" id="cities"></select>
// <p></p>

const country = document.querySelector('#country')
const cities = document.querySelector('#cities')
const selectedCity = document.querySelector('.selected-city')
const selectedCountry = document.querySelector('.selected-country')

const usa = ['Washington', 'Chicago', 'Dallas']
const germany = ['Berlin', 'Frankfurt', 'Munich']
const ukr = ['Lviv', 'Kyiv', 'Ternopil']

function selected() {
	const selectedOption = country.value
	cities.innerHTML = ''
	if (selectedOption === 'ger') {
		for (let i = 0; i < germany.length; i++) {
			const option = document.createElement('option')
			option.value = germany[i]
			option.textContent = germany[i]
			cities.appendChild(option)
		}
		selectedCountry.textContent = 'Germany'
	} else if (selectedOption === 'usa') {
		for (let i = 0; i < usa.length; i++) {
			const option = document.createElement('option')
			option.value = usa[i]
			option.textContent = usa[i]
			cities.appendChild(option)
		}
		selectedCountry.textContent = 'USA'
	} else if (selectedOption === 'ukr') {
		for (let i = 0; i < ukr.length; i++) {
			const option = document.createElement('option')
			option.value = ukr[i]
			option.textContent = ukr[i]
			cities.appendChild(option)
		}
		selectedCountry.textContent = 'Ukraine'
	}
}

country.addEventListener('change', selected)

cities.addEventListener('change', function () {
	selectedCity.textContent = cities.value
})


// 7-⭐⭐⭐
// Придумайте просту гру з використанням цих спрайтів. 
// На 2-3 дії користувача. (кліки миші, натискання клавіш).
// Наприклад:
// - вибір персонажа
// - стрибок

// https://user-images.githubusercontent.com/9075641/184331849-6cc33681-dcdf-4eef-830b-83fc43056e19.png
