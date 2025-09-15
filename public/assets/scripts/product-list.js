import { Component } from "./component.js"
import { Product } from "./product.js"
import { ProductItem } from "./product-item.js"
import { ElementAttribute } from "./element-attribute.js"

export class ProductList extends Component {
    products = []

    constructor(rootId) {
        super(rootId)
        this.loadProducts()
    }

    async loadProducts() {
        this.products = await fetch("/products").then(res => res.json())

        this.renderProducts()
    }

    render() {
        this.createRootElement("ul", "product-list", [
            new ElementAttribute("id", "prod-list")
        ])  // <ul class="product-list" id="prod-list"></ul>
    }

    renderProducts() {
        this.products.forEach(product => new ProductItem(product, "prod-list"))
    }
}