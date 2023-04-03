// 8. REGULAR EXPRESSIONS. MEMORY MANAGEMENT
// 📀💿💿💿

// 8-1.
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні.
// Приклад роботи:
// upperCase('regexp');
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"

function upperCase(text) {
	const regExp = /^[A-Z]/
	if (regExp.test(text)) {
		console.log('Рядок починається з великої літери')
	} else {
		console.log('Рядок не починається з великої літери')
	}
}

upperCase('Rtyhj')

// 8-2.
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true

function checkEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}

console.log(checkEmail('Qrremhhhahhhil777@gmail.com'))

// 8-3.
// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

const inputString = 'Java Script'
const regex = /^(\w+)\s+(\w+)$/
const replacedString = inputString.replace(regex, '$2, $1')
console.log(replacedString)

// 8-4.
// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

function creditCardValidation(input) {
	const regex = /^(\d{4})-(\d{4})-(\d{4})-(\d{4})$/
	return regex.test(input)
}

// 8-5.
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.

// checkEmail('my_mail@gmail.com');
// "Email is correct!"
// checkEmail('#my_mail@gmail.com');
// "Email is not correct!"
// checkEmail('my_ma--il@gmail.com');
// "Email is not correct!"

function checkEmail(email) {
	const emailRegex = /^[a-zA-Z0-9]+([_\-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]+$/
	if (emailRegex.test(email)) {
		return 'Email is correct!'
	} else {
		return 'Email is not correct!'
	}
}
console.log(checkEmail('my_ma-il@gmail.com'))

// 8-6.
// Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true
// //1.1, 3

// checkLogin('ee1*1ret3');
// false
// //1, 1, 3

function checkLogin(login) {
	const regex = /^[a-zA-Z][a-zA-Z0-9\.]{1,9}$/
	return regex.test(login)
}

function findNumbers(login) {
	const regex = /\d+(\.\d+)?/g
	return login.match(regex)
}

function processLogin(login) {
	console.log(checkLogin(login))
	console.log(findNumbers(login))
}

processLogin('ee1.1ret3')

// 8-⭐⭐⭐
// Додайте перевірку на кожне поле даних в формі
// https://codepen.io/misha_klymenko/pen/rNZKodW?editors=1000
