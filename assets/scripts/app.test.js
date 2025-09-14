import { describe, expect, it, vi, beforeEach } from "vitest"

import { App } from "./app.js"

vi.mock("./shop.js", () => {
    return {
        Shop: vi.fn().mockImplementation(() => {
            return {
                cart: {
                    addProduct: vi.fn()
                }
            }
        })
    }
})

describe("App", () => {
    beforeEach(() => {
        App.cart = null
    })

    it("should initialize the shop and set the cart", () => {
        App.init();
        expect(App.cart).not.toBeNull()
    })

    it("should add product to cart if cart is initialized", () => {
        // Prepare
        App.init()
        const product = { id: 1, name: "Test Product" }

        // Execution
        App.addProductToCart(product)

        // Asserts
        expect(App.cart.addProduct).toHaveBeenCalled()
        expect(App.cart.addProduct).toHaveBeenCalledWith(product)
    })

    it("should not add product to cart if cart is not initialized", () => {
        expect(App.cart).toBeNull()
    })

})