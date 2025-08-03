const sum = (...numbers) => {
    const validateNumber = (number) => {
        if (isNaN(number)) {
            return 0
        } else {
            return number
        }
    }


    let total = 0
    for (const number of numbers) {
        total = total + validateNumber(number)
    }

    return total
}

console.log(sum("cien", 30, 40, 89))