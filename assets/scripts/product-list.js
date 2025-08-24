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

    loadProducts() {
        this.products = [
            new Product(
                "Pillow",
                "https://linensociety.com/cdn/shop/products/heirloom-pillow_14294b09-8232-4d5d-a305-022b802669ab_1800x1440.jpg?v=1584402804",
                "Afforable and cozy pillow",
                100
            ),
            new Product(
                "Cutlery",
                "https://www.cutlery.uk.com/wp-content/uploads/2020/10/SheffFiddleClassic.jpg",
                "Steel cutlery",
                200
            ),
            new Product(
                "Night Table",
                "https://m.media-amazon.com/images/I/61Tej+qYSES.jpg",
                "Roman style night table",
                500
            ),
            new Product(
                "Purse",
                "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/3992/PMP20000686134/full_image-1.png",
                "Modern purse",
                350
            ),
            new Product(
                "Couch",
                "https://www.thespruce.com/thmb/65l9i7kdcdic4mVKvKykx1Bq6bs=/3360x0/filters:no_upscale():max_bytes(150000):strip_icc()/signs-to-replace-your-couch-4165258-hero-5266fa7b788c41f6a02f24224a5de29b.jpg",
                "Greek style couch",
                900
            )
        ]

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