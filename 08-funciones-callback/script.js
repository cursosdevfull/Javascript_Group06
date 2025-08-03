const showResultEnglish = (result) => {
    console.log("Result is", result)
}

const showResultEspanol = (result) => {
    console.log("Resultado es", result)
}


const sum = (returnHandler, ...values) => {
    let total = 0;

    for (const value of values) {
        total = total + value
    }

    returnHandler(total)
    //return total
}

const multiply = (returnHandler, ...values) => {
    let total = 1;

    for (const value of values) {
        total = total * value
    }

    returnHandler(total)
    //return total
}

sum(showResultEspanol, 10, 30, 50)
multiply(showResultEnglish, 30, 30, 23, 3)