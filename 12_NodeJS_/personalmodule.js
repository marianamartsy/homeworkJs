const helloUser = name => {
	const date = new Date()
	const hours = date.getHours()

	let greeting

	if (hours >= 6 && hours < 12) {
		greeting = 'Добрий ранок'
	} else if (hours >= 12 && hours < 18) {
		greeting = 'Добрий день'
	} else {
		greeting = 'Добрий вечір'
	}
	if (name) {
		return `${greeting}, ${name}!`
	} else {
		return date
	}
}

module.exports = {
	helloUser,
}
