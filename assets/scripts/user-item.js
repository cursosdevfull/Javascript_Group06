export class UserItem {
    constructor(user) {
        this.user = user
    }

    render(cb) {
        const userCardTemplate = document.getElementById("user-card-template")
        const element = userCardTemplate.content.cloneNode(true)

        const userCard = element.querySelector(".user-card")
        userCard.setAttribute("data-user-id", this.user.id)
        userCard.addEventListener("click", cb)
        element.querySelector(".user-name").textContent = this.user.name
        element.querySelector(".user-username").textContent = this.user.username
        element.querySelector(".user-email").textContent = this.user.email
        element.querySelector(".user-company").textContent = this.user.company.name

        return element
    }
}