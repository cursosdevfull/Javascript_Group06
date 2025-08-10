window.name = "Patricia"
window.lastname = "Ramirez"

const person = {
    name: "Adriana",
    lastname: "Zavala",
    age: 23,
    hobbies: ["jogging", "study", "dance"],
    relatives: {
        mother: "Lucía Zevallos",
        father: "Jorge Zavala"
    },
    setData(pName, pAge) {
        this.name = pName
        this.age = pAge
    }
}

/* console.log("person before", person)
person.setData("Claudia", 50)
console.log("person after", person) */

class Person {
    name
    lastname
    age
    gender

    constructor(pName, pLastname, pAge, pGender) {
        this.name = pName
        this.lastname = pLastname
        this.age = pAge
        this.gender = pGender
    }

    getYearBorn() {
        const instance = new Date()
        const currentYear = instance.getFullYear()
        //alert("Person was born in " + (currentYear - this.age))
        this.generateAlert("Person was born in " + (currentYear - this.age))
    }

    generateAlert(message) {
        alert(message)
    }
}

console.log("Person", Person)

const persona = new Person("Joaquín", "Ugarte", 25, "Male")

console.log("persona", persona)
persona.getYearBorn()
