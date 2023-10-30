const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumbers = []

for (let i = numbers.length; i > 0;){
    if (numbers[i] % 2 == 0){
        evenNumbers.push(numbers[i])
        i--
    }
    else{
        i--
    }
}

console.log(evenNumbers)
