const ul = document.querySelector("ul")

const li1 = document.createElement("li")
li1.textContent = "New Item"

/* ul.append(li1)
ul.append("solo texto") */
ul.appendChild(li1)
//ul.appendChild("hola")

const newLi2 = document.createElement("li")
newLi2.textContent = "newLi2"
ul.lastElementChild.before(newLi2)

const newLi3 = document.createElement("li")
newLi3.textContent = "newLi3"
ul.firstElementChild.after(newLi3)

const newLi4 = document.createElement("li")
newLi4.textContent = "newLi4"
ul.firstElementChild.replaceWith(newLi4)

