const prices = [100, 56, 20, 23, 5, 89, 90]

//const pricesSorted = prices.sort((a, b) => {
//    return a < b ? 1 : -1
/*     if (a < b) {
        return 1
    } else {
        return -1
    } */
//})

//const pricesSorted = prices.sort((a, b) => a < b ? 1 : -1)

function SortElements(a, b) {
    return a < b ? 1 : -1
}

const pricesSorted = prices.sort(SortElements)

console.log("pricesSorted", pricesSorted)

