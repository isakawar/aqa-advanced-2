function divide (numerator, denominator){
   try {
       if (denominator === 0) throw new Error("Error Denominator = 0")
       else if (Number.isInteger(numerator) === false || Number.isInteger(denominator) === false) throw new Error("Numerator or Denominator is not integer")

   }catch (e){
       console.log(e.message)
   }
    finally {
       console.log("Робота завершена")
    }
    return numerator / denominator
}

console.log(divide(10, 2))
console.log(divide(5, 0))
console.log(divide("abc", 2))
