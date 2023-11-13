function printNum(num) {
	if (num > 0) {
		console.log(num)
		printNum(num - 1)
	}
}

printNum(5)
