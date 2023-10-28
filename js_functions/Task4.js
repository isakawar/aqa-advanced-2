function divide(numerator, denominator) {
    if (Number.isInteger(numerator) === false || Number.isInteger(denominator) === false) {
        throw new Error('Numerator or Denominator is not integer.')
    }

    else if (denominator === 0) {
        throw new Error('Denominator = 0')
    }

    return numerator / denominator
}

try {
    console.log(divide(10, 2))// Повинно вивести: 5
    console.log(divide(10, 0))// Повинно вивести помилку (Denominator = 0)
    console.log(divide('qwe', 5))//Повинно вивести помилку (Numerator or Denominator is not integer.)
} catch (error) {
    console.error('Error: ' + error.message)
} finally {
    console.log('Робота завершена')
}

