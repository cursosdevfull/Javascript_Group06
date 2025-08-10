"use strict"

const mainTitle = document.getElementById("main-title")
console.log(mainTitle)

const elements = document.getElementsByClassName("list-item")
console.log(elements)

const elUnique = document.querySelector(".list-item")
console.log("elUnique", elUnique)
console.log("elUnique", elUnique.textContent)

const allElements = document.querySelectorAll(".list-item")
console.log("allElements", allElements)

const allElementsByClassName = document.getElementsByClassName("list-item")
console.log("allElementsByClassName", allElementsByClassName)

const elementFirst = document.querySelector("ul li:first-of-type")
console.log("elementFirst", elementFirst.textContent)

const elementLast = document.querySelector("ul li:last-of-type")
console.log("elementLast", elementLast.textContent)

const body = document.body
body.style.backgroundColor = "red"

const head = document.head

const html = document.documentElement

console.log("html", html)