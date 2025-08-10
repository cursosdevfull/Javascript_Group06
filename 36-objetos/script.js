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
    "name and lastname": "Adriana Zavala",
    greetMorning: function greet() {
        alert("Good morning")
    },
    bye: () => {
        alert("Bye")
    },
    fullname() {
        alert("Fullname")
    },
    greetFullname: function () {
        console.log("greetFullname", this)
        alert(this.name + " " + this.lastname)
    },
    greetFullnameOut: () => {
        console.log("greetFullnameOut", this)
        alert(this.name + " " + this.lastname)
    }

    /*fullname: function (prefix) {
        alert(prefix + " Fullname")
    }*/
}

console.log("person", person)
/* person.greetMorning()
person.bye()
person.fullname() */
person.greetFullname()
person.greetFullnameOut()