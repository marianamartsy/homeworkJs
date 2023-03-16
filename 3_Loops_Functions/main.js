// 1.
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]

const arr = [5, 3, 4, 5, 6, 7, 3]

function compact(arr) {
	return arr.filter((value, index) => {
		return arr.indexOf(value) == index
	})
}
const arr2 = compact(arr)
console.log(arr2)

// 2.
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//  - початкове значення
//  - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

function createArray(start, end) {
	let arr = []
	for (i = start; i <= end; i++) {
		arr.push(i)
	}
	return arr
}

let arr = createArray(2, 9)
console.log(arr)

// 3.
// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.

let a = 1
let b = 7

function repeats(start, end) {
	let arr = []
	for (i = start; i <= end; i++) {
		arr.push(i)
	}

	let newArr = []
	let count = 1
	arr.forEach(el => {
		newArr = newArr.concat(Array(count).fill(el))
		count++
	})
	return newArr
}

let arr = repeats(a, b)
console.log(arr)

// 4.
// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]

function randArray(k) {
	let arr = []
	for (let i = 0; i < k; i++) {
		let randomNum = Math.floor(Math.random() * 500) + 1
		arr.push(randomNum)
	}
	return arr
}

let arr = randArray(5)
console.log(arr)

// 5.
// Є масив [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun']
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
// let arrNew = funcName(arr);
//  /*
// [
// [5, 12, 99, 2, 2, 4, 3],
// ['Limit', 'a', '3', '33', 'a', 'text', 'strong', 'broun'
// ]
// */

let arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun']

function funcName(arr) {
	let numArr = []
	let strArr = []

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			const [numArr1, strArr1] = funcName(arr[i])
			numArr = numArr.concat(numArr1)
			strArr = strArr.concat(strArr1)
		} else if (typeof arr[i] === 'number') {
			numArr.push(arr[i])
		} else if (typeof arr[i] === 'string') {
			strArr.push(arr[i])
		}
	}
	return [numArr, strArr]
}

let arrNew = funcName(arr)
console.log(arrNew)

// 6.
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.

function calc(a, b, op) {
	if (op === 1) {
		return (a - b)
	} else if (op === 2) {
		return(a * b)
	} else if (op === 3) {
		return(a / b)
	} else {
		return(a + b)
	}
}

let mmm = calc(1, 3, 1)
console.log(mmm);
// 7.
// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

function findUnique(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) !== i) {
			return false
		}
	}
	return true
}

console.log(findUnique([1, 2, 3, 5, 11, 1]))

// ⭐⭐⭐
// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.
// const tom = create("pass_for_Tom");
// tom("pass_for_Tom"); //повертає true
// tom("pass_for_tom"); //повертає false

let check = function () {
	return 'pass_for_Tom'
}

function create(str) {
	if (str === check()) {
		return true
	}
	return false
}

const tom = create('pass_for_Tom')

console.log(tom)
