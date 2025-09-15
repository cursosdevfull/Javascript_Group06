import { ShoppingCart } from "./shopping-cart.js"
import { ProductList } from "./product-list.js"

export class Shop {
    rootId;

    constructor(rootId) {
        this.rootId = rootId
        this.render()
    }

    render() {
        this.cart = new ShoppingCart(this.rootId)
        new ProductList(this.rootId)
    }
}