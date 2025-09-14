import { describe, it, vi, expect, beforeEach, afterEach } from "vitest"

import { ShoppingCart } from "./shopping-cart.js"

vi.mock("./component.js", () => {
    return {
        Component: class {
            constructor(rootId, isRendered) {
                this.rootId = rootId
            }

            createRootElement = vi.fn((tag, cssClass) => {
                const element = document.createElement(tag)
                element.className = cssClass
                return element
            })
        }
    }
})

describe("ShoppingCart", () => {
    let shoppingCart
    let container
    const rootId = "test-cart-container"

    beforeEach(() => {
        container = document.createElement("div")
        container.id = rootId
        document.body.appendChild(container)

        // Mock console.log to avoid noise in tests
        vi.spyOn(console, 'log').mockImplementation(() => { })
    })

    afterEach(() => {
        document.body.removeChild(container)
        vi.restoreAllMocks()
    })

    it("should initialize with correct rootId and empty items array", () => {
        shoppingCart = new ShoppingCart(rootId)

        expect(shoppingCart.rootId).toBe(rootId)
        expect(shoppingCart.items).toEqual([])
    })

    it("should call render method during construction", () => {
        const renderSpy = vi.spyOn(ShoppingCart.prototype, "render")
        shoppingCart = new ShoppingCart(rootId)

        expect(renderSpy).toHaveBeenCalled()
        renderSpy.mockRestore()
    })

    it("should log constructor message", () => {
        shoppingCart = new ShoppingCart(rootId)

        expect(console.log).toHaveBeenCalledWith("ShoppingCart constructor")
    })

    it("should create correct DOM structure when render is called", () => {
        shoppingCart = new ShoppingCart(rootId)
        const cartElement = shoppingCart.createRootElement.mock.results[0].value

        expect(shoppingCart.createRootElement).toHaveBeenCalledWith("section", "cart")
        expect(cartElement.innerHTML).toContain("<h2>Total: 0</h2>")
        expect(cartElement.innerHTML).toContain("<button>Order now</button>")
        expect(shoppingCart.totalOutput).toBeDefined()
    })

    it("should add product to items and update total", () => {
        shoppingCart = new ShoppingCart(rootId)
        const product = { id: 1, name: "Test Product", price: 50 }

        shoppingCart.addProduct(product)

        expect(shoppingCart.items).toContain(product)
        expect(shoppingCart.items.length).toBe(1)
        expect(shoppingCart.totalOutput.innerHTML).toBe("Total: US 50")
    })

    it("should add multiple products and calculate correct total", () => {
        shoppingCart = new ShoppingCart(rootId)
        const product1 = { id: 1, name: "Product 1", price: 50 }
        const product2 = { id: 2, name: "Product 2", price: 30 }

        shoppingCart.addProduct(product1)
        shoppingCart.addProduct(product2)

        expect(shoppingCart.items.length).toBe(2)
        expect(shoppingCart.totalOutput.innerHTML).toBe("Total: US 80")
    })

    it("should update cart items and calculate total correctly", () => {
        shoppingCart = new ShoppingCart(rootId)
        const products = [
            { id: 1, name: "Product 1", price: 25 },
            { id: 2, name: "Product 2", price: 35 },
            { id: 3, name: "Product 3", price: 40 }
        ]

        shoppingCart.cartItems(products)

        expect(shoppingCart.items).toEqual(products)
        expect(shoppingCart.totalOutput.innerHTML).toBe("Total: US 100")
    })

    it("should handle empty cart items correctly", () => {
        shoppingCart = new ShoppingCart(rootId)

        shoppingCart.cartItems([])

        expect(shoppingCart.items).toEqual([])
        expect(shoppingCart.totalOutput.innerHTML).toBe("Total: US 0")
    })

    it("should handle products with zero price", () => {
        shoppingCart = new ShoppingCart(rootId)
        const product = { id: 1, name: "Free Product", price: 0 }

        shoppingCart.addProduct(product)

        expect(shoppingCart.items).toContain(product)
        expect(shoppingCart.totalOutput.innerHTML).toBe("Total: US 0")
    })
})