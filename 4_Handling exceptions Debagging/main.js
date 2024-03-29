// 1.
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

function sumSliceArray(arr, first, second) {
	if (isNaN(first) || isNaN(second)) {
		throw new TypeError('Введені значення не є числами')
	}
	if (first > arr.length || second > arr.length || first < 0 || second < 0) {
		throw new RangeError('Введені номери елементів виходять за межі масиву')
	}
	return arr[first] + arr[second]
}

try {
	const arr = [1, 2, 3, 4, 5]
	const sum = sumSliceArray(arr, 1, 3)
	console.log('Сума елементів:', sum)
} catch (error) {
	console.log(`Виникла помилка: ${error.name} - ${error.message}`)
}

// 2.
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та опису помилки.

function checkAge() {
	try {
		const userName = prompt('Введіть ім`я', '')
		const age = +prompt('Введіть свій вік', '')
		const status = prompt('Введіть свій статус', 'адмін модератор користувач')
		if (!userName || age === undefined || !status) throw new Error('The field is empty!')
		if (age < 18 || age > 70 || age < 0 || isNaN(age)) throw new RangeError('Неправильно введений вік')
		if (
			!(
				status === 'адмін' &&
				status === 'модератор' &&
				status === 'користувач' &&
				status === 'Адмін' &&
				status === 'Модератор' &&
				status === 'Користувач'
			)
		)
			throw new EvalError('У полі статус введено неправильне слово')
		alert('Доступ до фільму відкрито')
	} catch (error) {
		alert(`Виникла помилка: ${error.name}. ${error.message}`)
	}
}

checkAge()

// 3.
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea(width, height) {
	if (isNaN(width) || isNaN(height)) {
		throw new TypeError('Введені значення не є числами')
	}
	if (width < 0 || height < 0) {
		throw new TypeError('Дані не можуть бути від`ємними')
	}
	return width * height
}
try {
	const recArea = calcRectangleArea(3, 3)
	console.log('Площа прямокутника:', recArea)
} catch (error) {
	console.log(`Виникла помилка: ${error.name} - ${error.message}`)
}

// 4.
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number

class MonthException {
	constructor(message) {
		this.message = message
		this.name = 'MonthException'
	}
}

function showMonthName(month) {
	if (isNaN(month) || month < 1 || month > 12) {
		throw new MonthException('Incorrect month number')
	}

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	const monthNumber = months[month - 1]
	return monthNumber
}

try {
	console.log(showMonthName(5))
	console.log(showMonthName(14))
} catch (error) {
	console.log(`${error.name} - ${error.message}`)
}

// 5.
// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

function showUser(id) {
	if (id < 0) {
		throw new TypeError('Дані не можуть бути від`ємними:' + id)
	}

	return {
		id: id,
	}
}

function showUsers(ids) {
	const users = []
	for (let i = 0; i < ids.length; i++) {
		try {
			users.push(showUser(ids[i]))
		} catch (error) {
			console.log(error.message)
		}
	}
	return users
}

const showUsersResult = showUsers([7, -12, 44, 22])
console.log(showUsersResult)
