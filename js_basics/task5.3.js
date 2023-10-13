let height = 25
let radius = 120

const calculateRadiusCylinder = (height, radius) => Math.PI * (radius**2) * height

console.log(`Cylinder volume = ${calculateRadiusCylinder(height, radius).toFixed(2)}`)