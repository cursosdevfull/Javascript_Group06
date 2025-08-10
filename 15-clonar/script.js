const newLi = document.createElement("li")
const content = document.createTextNode("new tag li")
newLi.append(content)

const liFirst = document.querySelector("li:first-of-type")

const ul = liFirst.parentElement
//const ul = document.querySelector("ul")

ul.append(newLi)

