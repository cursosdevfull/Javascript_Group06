import { Selectors } from "./selectors.js"

export class UserDetail {
    constructor(user) {
        this.user = user
    }

    render(tagRender) {
        const element = Selectors.userDetailsTemplate.content.cloneNode(true)

        const { name, username, email, phone, website, address, company } = this.user

        element.querySelector(".user-full-name").textContent = name
        element.querySelector(".user-username-detail").textContent = username
        element.querySelector(".user-email-detail").textContent = email
        element.querySelector(".user-phone").textContent = phone
        element.querySelector(".user-website").textContent = website
        element.querySelector(".user-address-street").textContent = address.street
        element.querySelector(".user-address-city").textContent = address.city
        element.querySelector(".user-address-zipcode").textContent = address.zipcode
        element.querySelector(".user-company-name").textContent = company.name
        element.querySelector(".user-company-catchphrase").textContent = company.catchPhrase
        element.querySelector(".user-company-bs").textContent = company.bs

        tagRender.appendChild(element)
    }
}

