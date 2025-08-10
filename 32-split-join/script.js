const contentFileCSV = "jorge,aleman,30,developer\ncarmen,nieto,28,ui\nsofía,castro,23,software engineer\nlucía,salazar,31,sre"

/* const informationUser = contentFileCSV.split("\n")
console.log("informationUser", informationUser)

const personalData = informationUser.map(el => el.split(","))
console.log("personalData", personalData)

const dataFormatted = personalData.map(el => {
    return {
        name: el[0],
        lastname: el[1],
        age: parseInt(el[2]),
        positionJob: el[3]
    }
})
console.log("dataFormatted", dataFormatted) */


/* const data = contentFileCSV.split("\n")
    .map(el => el.split(","))
    .map(el => {
        return {
            name: el[0],
            lastname: el[1],
            age: parseInt(el[2]),
            positionJob: el[3]
        }
    })
console.log("data", data) */

const data = contentFileCSV.split("\n")
    .map(el => el.split(","))
    .map(el =>
    ({
        name: el[0],
        lastname: el[1],
        age: parseInt(el[2]),
        positionJob: el[3]
    })
    )
console.log("data", data)



/*
[{
    name: ...,
    lastname: ...,
    age: ...,
    positionJob: ...
}]
*/