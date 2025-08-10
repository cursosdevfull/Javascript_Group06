const hobbies = [
    "ver películas",
    "hacer parrillada",
    "aprender cosas de tecnología todos los meses"
]

hobbies.push("Subir a montañas rusas")
hobbies.unshift("Viajar a ciudades serranas")

console.log(hobbies)

const hobbieDeleted = hobbies.pop()

console.log("hobbieDeleted", hobbieDeleted)
console.log("hobbits after delete", hobbies)

const hobbieDeleteFromBegin = hobbies.shift()

console.log("hobbieDeleteFromBegin", hobbieDeleteFromBegin)
console.log("hobbits after delete", hobbies)
