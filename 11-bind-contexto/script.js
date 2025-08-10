"use strict"

const student = {
    name: "Luis",
    lastname: "Zapata",
    getInfo: function (status, email) {
        return "name: " + this.name + " lastname: " + this.lastname + " status: " + status + " email: " + email
    }
}

const anotherStudent = {
    name: "Carmen",
    lastname: "Perales"
}


//console.log(student.getInfo("single", "luis.zapata@cursos-dev.com"))

this.name = "Sergio"
this.lastname = "Hidalgo"

//const getInfoStudent = student.getInfo.bind(this)
//console.log(getInfoStudent("married", "luis.zapata@cursos-dev.com"))

//const getInfoStudent = student.getInfo.bind(student)
//console.log(getInfoStudent("married", "luis.zapata@cursos-dev.com"))

/* const getInfoStudent = student.getInfo.bind(anotherStudent)
console.log(getInfoStudent("married", "luis.zapata@cursos-dev.com")) */

const getInfoStudent = student.getInfo.bind(anotherStudent, "divorced")
console.log(getInfoStudent("luis.zapata@cursos-dev.com"))
console.log(student.getInfo("widow", "pedro.carmona@cursos-dev.com"))