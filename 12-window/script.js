"use strict"

const student = {
    name: "Luis",
    lastname: "Zapata",
    getInfo: function (status, email) {
        //return "name: " + this.name + " lastname: " + this.lastname + " status: " + status + " email: " + email
        return `
            name: ${this.name} 
            lastname: ${this.lastname} 
            status: ${status} 
            email: ${email}
        `
    }
}

console.log(student)
console.log(student.getInfo("married", "luis.zapata@email.com"))

window.name = "New App"

console.log("Name", name)

console.dir(student)
