// 1. Дано три цілих числа: a, b, c. Перевірте істинність висловлювання: a < b < c

const a = 7
const b = 77
const c = 777

if (a < b && b < c) {
	console.log('Висловлювання a < b < c є істинним')
} else {
	console.log('Висловлювання a < b < c є хибним')
}

// 2. Є такий код:

let x = 1
let y = 2

let res1 = '' + x + y
// Допишіть код, необхідно використовувати змінні x і y
console.log(res1) // ""12""
console.log(typeof res1) // ""string""

let res2 = true + String(y)
// Допишіть код, необхідно використовувати змінні x і y
console.log(res2) // ""true2""
console.log(typeof res2) // ""string""

let res3 = Boolean(x)
// Допишіть код, необхідно використовувати змінні x і y
console.log(res3) // true
console.log(typeof res3) // ""boolean""

let res4 = parseInt(Boolean(x))
// Допишіть код, необхідно використовувати змінні x і y
console.log(res4) // NaN
console.log(typeof res4) // ""number""

// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.

// 3.
// Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”,

const isAdult = prompt("Введіть ваш вік", "")
if (isAdult >= 18) {
    alert(`Ви досягли повнолітнього віку`)
} else {
    alert(`Ви ще надто молоді`)
}

// 4.
// Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі входження цього числа із поточного масиву.

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
let data = []
let count = {}

for (let num of arr) {
	count[num] = count[num] ? count[num] + 1 : 1
}

let maxCount = Math.max(...Object.values(count))

for (let num of arr) {
	if (count[num] === maxCount) {
		data.push(parseInt(num))
		delete count[num]
	}
}
for (let i = 0; i < arr.length; i++) {
	if (data.includes(arr[i])) {
		arr.splice(i, 1)
	}
}

console.log(data)
console.log(arr)

// Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно
//     a) визначити і вивести в консоль площу трикутника
//     b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).

const lengthA = prompt('Enter triangle side length - a', '')
const lengthB = prompt('Enter triangle side length - b', '')
const lengthC = prompt('Enter triangle side length - c', '')

if (isNaN(lengthA) || isNaN(lengthB) || isNaN(lengthC) || lengthA <= 0 || lengthB <= 0 || lengthC <= 0) {
	console.log(`Incorrect data`)
} else {
	const p = (lengthA + lengthB + lengthC) / 2
	const s = Math.sqrt(p * (p - lengthA) * (p - lengthB) * (p - lengthC))

	console.log(`Площа трикутника S = ${s.toFixed(3)}`)

	if (
		Math.pow(lengthA, 2) === Math.pow(lengthB + lengthC, 2) ||
		Math.pow(lengthB, 2) === Math.pow(lengthA + lengthC, 2) ||
		Math.pow(lengthC, 2) === Math.pow(lengthB + lengthA, 2)
	) {
		console.log(`Прямокутний трикутник`)
	} else {
		console.log(`Трикутник не прямокутний`)
	}
}

// Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

const date = new Date()
const hour = date.getHours()

console.log(hour)

if (hour >= 23 || hour < 5) {
	console.log(`Доброї ночі`)
} else if (hour >= 5 && hour < 11) {
	console.log(`Доброго ранку`)
} else if (hour >= 11 && hour < 17) {
	console.log(`Доброго дня`)
} else if (hour >= 17 && hour < 23) {
	console.log(`Доброго вечора`)
}

switch (hour) {
	case 23:
	case 0:
	case 1:
	case 2:
	case 3:
	case 4:
		console.log(`Доброї ночі`)
		break
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
		console.log(`Доброго ранку`)
		break
	case 11:
	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
		console.log(`Доброго дня`)
		break
	case 17:
	case 18:
	case 19:
	case 20:
	case 21:
	case 22:
		console.log(`Доброго вечора`)
		break
}
