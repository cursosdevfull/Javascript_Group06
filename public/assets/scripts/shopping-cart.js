import { Component } from "./component.js"

export class ShoppingCart extends Component {
    items = []

    constructor(rootId) {
        super(rootId, false)
        console.log("ShoppingCart constructor")
        this.render()
    }

    render() {
        const element = this.createRootElement("section", "cart")
        element.innerHTML = `
            <h2>Total: 0</h2>
            <button>Order now</button>
        `
        this.totalOutput = element.querySelector("h2")
    }

    addProduct(product) {
        const updateItems = [...this.items]
        updateItems.push(product)
        this.cartItems(updateItems)
    }

    cartItems(listItems) {
        this.items = listItems
        const total = this.items.reduce((previousValue, currentValue) => {
            previousValue += currentValue.price
            return previousValue
        }, 0)

        this.totalOutput.innerHTML = `Total: US ${total}`
    }
}