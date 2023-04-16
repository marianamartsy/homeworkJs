// 12. NODE.JS INTRODUCTION
// 📀📀💿💿

// 12-1.
// Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path).
// Зображення

const http = require('http')
const os = require('os')
const path = require('path')
const port = 3000

const server = http.createServer((req, res) => {
	const user = os.userInfo().username
	const osType = os.type()
	const uptime = os.uptime()
	const cwd = process.cwd()
	const serverFilename = path.basename(__filename)

	res.writeHead(200, { 'Content-Type': 'text/html' })
	res.write(`<h1>System Info</h1>`)
	res.write(`<p>User: ${user}</p>`)
	res.write(`<p>OS Type: ${osType}</p>`)
	res.write(`<p>Uptime: ${uptime} minutes</p>`)
	res.write(`<p>Current Working Directory: ${cwd}</p>`)
	res.write(`<p>Server Filename: ${serverFilename}</p>`)
	res.end()
})
server.listen(port, err => {
	if (err) {
		return console.log('error')
	}
})

// 12-2.
// Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports.
//         Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:
// Зображення

const http = require('http')
const port = 3000
const os = require('os')
const { helloUser } = require('./personalmodule')

const server = http.createServer((req, res) => {
	const username = os.userInfo().username
	const greeting = helloUser(username)
	const date = helloUser()

	res.writeHead(200, { 'Content-Type': 'text/html' })
	res.write(`<p>Date of request: ${date}</p>`)
	res.write(`<p>${greeting}<p>`)
	res.end()
})

server.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

// 12-3 ⭐⭐⭐
// Створіть просту програму на Node.js, яка записує у файл текстову інформацію, яку користувач вводить з адресного рядка, а потім зчитує цей файл та виводить вміст на екран.

// Кроки:
// 1. Створити змінну, яка зберігатиме шлях до файлу, у який буде записана інформація.
// 2. Використовуючи модуль fs (file system), створити функцію, яка дозволить записувати інформацію в файл.
// 3. Використовуючи модуль http, створити сервер, який буде прослуховувати запити з адресного рядка та передавати отриману інформацію функції writeToTextFile().
// 4. Для зчитування даних з файлу, використовуйте модуль fs та функцію readFile()
// 5. Для того, щоб вивести зчитану інформацію на екран, додайте відповідну логіку до серверу.
