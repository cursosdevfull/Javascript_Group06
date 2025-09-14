const sum = require("./sum.js")

// Preparación
const operator1 = 20
const operator2 = 30

// Ejecución
const result = sum(operator1, operator2)

// Comprobación
if (result === 50) {
    console.log("Prueba exitosa")
} else {
    console.log("Prueba fallida")
}