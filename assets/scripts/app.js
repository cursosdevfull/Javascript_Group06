import { Shop } from "./shop.js"

export class App {
    static cart;

    static init(rootId) {
        console.log("initialize shop")
        const shop = new Shop(rootId)
        this.cart = shop.cart
    }

    static addProductToCart(product) {
        console.log("Product added to cart", product)
        this.cart.addProduct(product)
    }
}