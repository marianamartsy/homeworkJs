const input = document.querySelector('.place-number-input')
const btn = document.querySelector('.btn-add')
const data = document.querySelector('.textarea')

const compartments = [1, 2, 3, 4, 5]
const placesInCompartment = 6
const numberOfSeats = compartments.length * placesInCompartment

const seatsArr = []
for (let i = 1; i <= numberOfSeats; i++) {
	seatsArr.push(i)
}
const compartmentsArr = []
for (let i = 0; i < compartments.length; i++) {
	const start = i * placesInCompartment
	const end = (i + 1) * placesInCompartment
	const compartmentSeats = seatsArr.slice(start, end)
	compartmentsArr.push(compartmentSeats)
}

const numberOfCompartment = () => {
	for (let i = 0; i < compartmentsArr.length; i++) {
		if (input.value <= compartmentsArr[i][placesInCompartment - 1]) {
			return compartments[i]
		}
	}
}

const sideSeatArr = []
for (let seat = 1; seat < numberOfSeats; seat += 3) {
	sideSeatArr.push(seat)
}
const windowSeatArr = []
for (let seat = 0; seat < numberOfSeats; seat += 3) {
	windowSeatArr.push(seat)
}
const middleSeatArr = []
for (let seat = 2; seat < numberOfSeats; seat += 3) {
	middleSeatArr.push(seat)
}

const seatsType = () => {
	if (sideSeatArr.includes(parseInt(input.value))) {
		return `бокове`
	} else if (middleSeatArr.includes(parseInt(input.value))) {
		return `середнє`
	} else if (windowSeatArr.includes(parseInt(input.value))) {
		return `біля вікна`
	}
}

const seatInfo = () => {
	if (seatsArr.includes(parseInt(input.value))) {
		const compartmentNumber = numberOfCompartment()
		const seatType = seatsType()
		const result = `Номер купе: ${compartmentNumber}, тип місця: ${seatType} (вагон з сидячими місцями)`
		const output = document.createElement('p')
		output.textContent = result
		data.innerHTML = ''
		data.appendChild(output)
		input.value = ''
	} else {
		const output = document.createElement('p')
		output.textContent = 'Введіть коректний номер місця'
		data.innerHTML = ''
		data.appendChild(output)
		input.value = ''
	}
}

const enterKeyCheck = e => {
	if (e.key === 'Enter') {
		seatInfo()
	}
}

btn.addEventListener('click', seatInfo)
input.addEventListener('keyup', enterKeyCheck)
