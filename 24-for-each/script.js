const pricesWithoutTaxes = [20, 23, 5, 89, 90]
const tax = .2
const listPricesWithTaxes = []

pricesWithoutTaxes.forEach((value) => {
    listPricesWithTaxes.push(value * (1 + tax))
})

console.log("pricesWithoutTaxes", pricesWithoutTaxes)
console.log("listPricesWithTaxes", listPricesWithTaxes)