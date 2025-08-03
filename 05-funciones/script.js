console.log(sum(10, 20, 30, 40))

function sum(...values) {
    let total = 0

    for (const value of values) {
        total = total + value
    }

    return total
}


const ftnMultiply = function multiply(...values) {
    let total = 1

    for (const value of values) {
        total = total * value
    }

    return total
}

console.log(ftnMultiply(10, 20))

const ftnDivide = function (a, b) {
    return a / b
}

console.log(ftnDivide(500, 50))

const module = (a, b) => {
    return a % b
}

console.log(module(10, 3))


