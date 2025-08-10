const guesses = [
    { name: "Juan", age: 34 },
    { name: "Jimena", age: 15 },
    { name: "Aldo", age: 23 },
    { name: "Andrea", age: 12 }
]

const isThereAdult = guesses.some(guess => guess.age >= 18)
const isThereChild = guesses.some(guess => guess.age < 18)

console.log("isThereAdult", isThereAdult)
console.log("isThereChild", isThereChild)

const isEveryOneGreaterThanTwelve = guesses.every(guess => guess.age > 12)
console.log("isEveryOneGreaterThanTwelve", isEveryOneGreaterThanTwelve)
