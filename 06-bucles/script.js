for (let count = 0; count <= 50; count = count + 1) {
    console.log("count", count)
}

const users = ["Miguel", "Alberto", "María", "Lucía"]

for (let count = 0; count <= users.length; count = count + 1) {
    console.log(users[count])
}

for (const user of users) {
    console.log("user", user)
}

const userInfo = {
    name: "Martin",
    lastname: "Albertini",
    age: 45,
    status: "single"
}

for (const el in userInfo) {
    console.log("el", el)

    console.log(el, userInfo[el])
}

for (const prop of Object.keys(userInfo)) {
    console.log(prop)
}