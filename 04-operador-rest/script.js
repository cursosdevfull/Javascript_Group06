function sum(...values) { // values = [a, b, c, d] 
    let total = 0

    for (const value of values) {
        total = total + value
    }

    return total
}

console.log(sum(10, 20, 30, 50, 70, 200, -3, 87, 15))