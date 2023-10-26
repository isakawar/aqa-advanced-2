function calcRectangleAreaDeclarationFunction(width, height) {
    return width * height
}

const calcRectangleAreaExpressionFunction = function (width, height){
    return width * height
}

const calcRectangleAreaArrowFuction = (width, height) => width * height


console.log(`Площа прямокутника: ${calcRectangleAreaDeclarationFunction(10,5)}`)
console.log(`Площа прямокутника: ${calcRectangleAreaExpressionFunction(10,5)}`)
console.log(`Площа прямокутника: ${calcRectangleAreaArrowFuction(10,5)}`)
