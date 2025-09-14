import { describe, it, expect } from "vitest"

import { Product } from "./product.js"

describe("Product", () => {
    it("should initialize with the correct values", () => {
        const title = "Test Product"
        const imageUrl = "test.jpg"
        const description = "Test Description"
        const price = 100

        const product = new Product(title, imageUrl, description, price)

        expect(product.title).toBe(title)
        expect(product.imageUrl).toBe(imageUrl)
        expect(product.description).toBe(description)
        expect(product.price).toBe(price)
    })
})