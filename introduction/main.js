/* 2. 
Напишіть скрипт в зовнішньому файлі, який виводить в консоль ваше прізвище.
Підключіть створений файл до HTML-документу.*/

const surname = 'Martsynyuk'

console.log(surname)

// або

console.log('Martsynyuk')

/* 3.
  a) оголосіть дві змінні;
  b) запишіть у змінні будь-які значення;
  c) виведіть на екран значення змінних;
  d) скопіюйте значення однієї змінної в іншу;
  e) виведіть на екран значення змінних.*/

let animal = 'Dog'
let age = 2

console.log(animal, age)
animal = age
console.log(animal, age)

/* 4. 
Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.*/

let snow

const newObject = {
	string: 'String',
	number: 7,
	boolean: false,
	undefined: snow,
	null: null
}

console.log(newObject)

/* 5. 
Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.*/

const isAdult = confirm('Вам вже виповнилось 18 років?')

console.log(isAdult);

/* 6. 
В зовнішньому файлі напишіть скрипт , в якому оголосіть змінні, для збереження таких даних:
        - ваше ім’я
        - ваше прізвище
        - навчальна група
        - ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль. */

const myName = 'Mariana'
const mySurame = 'Martsynyuk'
const myGroup = 5
const myYear = 1989
const maritalStatus = true

console.log(typeof myGroup, typeof myYear, typeof maritalStatus, typeof myName, typeof mySurame)

let itSnow
let itBe
itBe = null

console.log(typeof itSnow, typeof itBe)

/*7. 
За допомогою функції prompt() напишіть скрипт , який послідовно запитує в користувача логін, імейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.*/

const user = prompt('Username', 'User')
const email = prompt('email', 'usermale@gmail.com')
const password = prompt('email', 'qwerty')
alert(`Dear ${user}, your email is ${email}, your password is ${password}`)

/* 8. 
Напишіть скрипт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.*/

const secInMin = 60
const minInHour = 60
const hoursDay = 24
const daysMonth = 30
const monthYear = 12

const secInHour = secInMin * minInHour
const secInDay = secInHour * hoursDay
const secInMonth = secInDay * daysMonth
const secInYear = monthYear * secInMonth

console.log(`кількість секунд в годині - ${secInHour}, кількість секунд в добі - ${secInDay}, кількість секунд в місяці - ${secInMonth}, кількість секунд в році - ${secInYear}`);