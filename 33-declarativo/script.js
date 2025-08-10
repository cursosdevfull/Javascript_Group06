const contentFileCSV = "jorge,aleman,30,developer\ncarmen,nieto,28,ui\nsofía,castro,23,software engineer\nlucía,salazar,31,sre"

function DivideByLine(content) {
    return content.split("\n")
}

function DivideByAttribute(el) {
    return el.split(",")
}

function FormatAttributes(el) {
    return {
        name: el[0],
        lastname: el[1],
        age: parseInt(el[2]),
        positionJob: el[3]
    }
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