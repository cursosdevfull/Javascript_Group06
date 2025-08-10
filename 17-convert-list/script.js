const numbers = [1, 2, 3, 4]

console.log(numbers)

const otherNumber = Array(3, 5)

console.log("otherNumber", otherNumber)

const otherWay = Array.of(5, 10, 28)
console.log("otherWay", otherWay)

const listItems = document.querySelectorAll("li")
console.log("listItems", listItems)

const arrayListItems = Array.from(listItems)

console.log("arrayListItems", arrayListItems)