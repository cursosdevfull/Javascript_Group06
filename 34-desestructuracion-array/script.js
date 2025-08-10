const contentFileCSV = "jorge,aleman,30,developer\ncarmen,nieto,28,ui\nsofía,castro,23,software engineer\nlucía,salazar,31,sre"

function DivideByLine(content) {
    return content.split("\n")
}

function DivideByAttribute(el) {
    return el.split(",")
}

function FormatAttributes(el) {
    const [name, lastname, age, positionJob] = el
    //return { name: name, lastname: lastname, age: age, positionJob: positionJob }
    return { name, lastname, age, positionJob }
}

const data = DivideByLine(contentFileCSV)
    .map(DivideByAttribute)
    .map(FormatAttributes)
console.log("data", data)



/*
[{
    name: ...,
    lastname: ...,
    age: ...,
    positionJob: ...
}]
*/