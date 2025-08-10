const hobbies = [
    "ver películas",
    "hacer parrillada",
    "aprender cosas de tecnología todos los meses",
    "viajar por el mundo",
    "subir a montañas rusas"
]

console.log(hobbies)

function deleteElement(element) {
    const position = hobbies.indexOf(element)

    if (position > -1) {
        hobbies.splice(position, 1)
    }
}

deleteElement("hacer parrillada")

console.log("after", hobbies)