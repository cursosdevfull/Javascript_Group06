import { describe, it, vi, expect, beforeEach } from "vitest"

import { Shop } from "./shop.js"
import { ShoppingCart } from "./shopping-cart.js"
import { ProductList } from "./product-list.js"

vi.mock("./shopping-cart.js", () => {
    return {
        ShoppingCart: vi.fn().mockImplementation(() => {
            return {
                items: [],
                addProduct: vi.fn(),
                cartItems: vi.fn()
            }
        })
    }
})

vi.mock("./product-list.js", () => {
    return {
        ProductList: vi.fn().mockImplementation(() => {
            return {}
        })
    }
})

describe("Shop", () => {
    let shop
    const rootId = "test-shop-container"

    beforeEach(() => {
        vi.clearAllMocks()
    })

    it("should initialize with the correct rootId", () => {
        shop = new Shop(rootId)
        expect(shop.rootId).toBe(rootId)
    })

    it("should call render method during construction", () => {
        const renderSpy = vi.spyOn(Shop.prototype, "render")
        shop = new Shop(rootId)

        expect(renderSpy).toHaveBeenCalled()
        renderSpy.mockRestore()
    })

    it("should create ShoppingCart and ProductList instances when render is called", () => {
        shop = new Shop(rootId)

        expect(ShoppingCart).toHaveBeenCalledWith(rootId)
        expect(ProductList).toHaveBeenCalledWith(rootId)
        expect(shop.cart).toBeDefined()
    })

    it("should store the cart instance after render", () => {
        shop = new Shop(rootId)

        expect(shop.cart).toBeDefined()
        expect(shop.cart.addProduct).toBeDefined()
        expect(shop.cart.cartItems).toBeDefined()
    })
})
