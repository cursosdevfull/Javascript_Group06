import { Selectors } from "./selectors.js"

export function showSection(element) {
    Selectors.sections.forEach(section => section.classList.remove("active"))
    element.classList.add("active")
}

export function showSubsection(tabTitle, tabContent, cb) {
    tabBtns.forEach(btn => btn.classList.remove("active"))
    tabContents.forEach(btn => btn.classList.remove("active"))

    tabTitle.classList.add("active")
    tabContent.classList.add("active")

    cb(userIdSelected)
}

export function clear(el) {
    el.innerHTML = ""
}