const pricesWithoutTaxes = [20, 23, 5, 89, 90]
const tax = .2

/* const listPricesWithTaxes = pricesWithoutTaxes.map(element => {
    return { price: element, priceWithTax: element * (1 + tax) }
}) */

const listPricesWithTaxes = pricesWithoutTaxes.map(element => ({ price: element, priceWithTax: element * (1 + tax) })
)


console.log("listPricesWithTaxes", listPricesWithTaxes)

