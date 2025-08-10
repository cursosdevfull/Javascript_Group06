const names = ["Carlos", "Julio", "Martha"]

const namesClone = [...names]

console.log("names", names)
console.log("namesClone", namesClone)

namesClone[0] = "Charles"

console.log("names", names)
console.log("namesClone", namesClone)

const auctionPrices = [3000, 4500, 2330, 1000, 7000, 560]

const maxPrice = Math.max(...auctionPrices)
const minPrice = Math.min(...auctionPrices)

console.log("maxPrice", maxPrice)
console.log("minPrice", minPrice)