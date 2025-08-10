const guesses = [
    { name: "Juan", age: 34 },
    { name: "Jimena", age: 15 },
    { name: "Aldo", age: 23 },
    { name: "Andrea", age: 12 }
]

const adults = guesses.filter(el => el.age >= 18)
console.log("adults", adults)
console.log("quantity", adults.length)