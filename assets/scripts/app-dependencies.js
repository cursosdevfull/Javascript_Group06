class ElementAttribute {
    constructor(name, value) {
        this.name = name
        this.value = value
    }
}

class Component {
    rootId = null

    constructor(rootId, isRendered = true) {
        this.rootId = rootId

        if (isRendered) this.render()
    }

    render() {
        console.log("Calling method render")
    }

    createRootElement(tag, cssClass, attributes) {
        const root = document.createElement(tag)

        if (cssClass) {
            root.className = cssClass
        }

        if (attributes && attributes.length) {
            for (const attr of attributes) {
                if (attr.name && attr.value) root.setAttribute(attr.name, attr.value)
            }
        }

        this.rootId.append(root)

        return root
    }
}

class Product {
    title = null
    imageUrl = null
    description = null
    price = null

    constructor(title, imageUrl, description, price) {
        this.title = title
        this.imageUrl = imageUrl
        this.description = description
        this.price = price
    }
}

class ProductItem extends Component {
    constructor(product, tagRenderId) {
        super(tagRenderId, false)
        this.product = product
        this.render()
    }

    addToCart() {
        App.addProductToCart(this.product)
    }

    render() {
        const productElement = this.createRootElement("li", "product-item")
        productElement.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}" />
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>US ${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        `
        // const addCartButton = productElement.getElementsByTagName("button")[0]
        const addCartButton = productElement.querySelector("button")
        addCartButton.addEventListener("click", this.addToCart.bind(this))
    }
}


class ProductList extends Component {
    products = []

    constructor(rootId) {
        super(rootId)
        this.rootId = rootId
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
        const prodList = this.rootId.querySelector("#prod-list")
        this.products.forEach(product => new ProductItem(product, prodList))
    }
}

class ShoppingCart extends Component {
    items = []

    constructor(rootId) {
        super(rootId)
        console.log("ShoppingCart constructor")
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

class Shop {
    constructor(shoppingCart) {
        this.render(shoppingCart)
    }

    render(shoppingCart) {
        this.cart = shoppingCart
    }
}

class App {
    static cart;

    static init(shop) {
        this.cart = shop.cart
    }

    static addProductToCart(product) {
        console.log("Product added to cart", product)
        this.cart.addProduct(product)
    }
}

const root = document.getElementById("app")
const shoppingCart = new ShoppingCart(root)
new ProductList(root)
const shop = new Shop(shoppingCart)

App.init(shop)