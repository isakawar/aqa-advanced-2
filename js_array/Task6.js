const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]
const newSortedList = Array.from(numbersList).sort(function (a, b) {
	return a - b
})

console.log(`First array: ${numbersList}`)
console.log(`Final array: ${newSortedList}`)
