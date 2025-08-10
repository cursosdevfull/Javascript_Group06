const showResult = (message, result) => {
    console.log(message, result)
}


const sum = (returnHandler, ...values) => {
    let total = 0;

    for (const value of values) {
        //total = total + value
        total += value
    }

    returnHandler(total)
    //return total
}

const subtract = (returnHandler, ...values) => {
    let total = 0;

    for (const value of values) {
        //total = total - value
        total -= value
    }

    returnHandler(total)
}

const multiply = (returnHandler, ...values) => {
    let total = 1;

    for (const value of values) {
        //total = total * value
        total *= value
    }

    returnHandler(total)
    //return total
}

sum(showResult.bind(this, "Result is"), 10, 30, 50)
multiply(showResult.bind(this, "O resultado é"), 30, 30, 23, 3)
subtract(showResult.bind(this, "Il risultato è"), 39, 20, 3, -100)