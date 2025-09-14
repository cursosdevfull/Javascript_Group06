import { beforeEach, describe, it, vi, expect } from "vitest"

import { App } from "./app.js"
import { Component } from "./component.js"
import { ProductItem } from "./product-item.js"


vi.mock("./app.js", () => {
    return {
        App: {
            addProductToCart: vi.fn()
        }
    }
})

vi.mock("./component.js", () => {
    return {
        Component: class {
            createRootElement = vi.fn((tag, cssClass) => {
                const element = document.createElement(tag)
                element.className = cssClass
                return element
            })
        }
    }
})

describe("ProductItem", () => {
    let product
    let productItem

    beforeEach(() => {
        product = {
            title: "Product Test",
            imageUrl: "test.jpg",
            price: 100,
            description: "Product description"
        }
        productItem = new ProductItem(product, "test-id")
    })

    it("should render the product item correctly", () => {
        productItem.render()
        const productElement = productItem.createRootElement.mock.results[0].value

        const html = productElement.innerHTML
        expect(html).toContain(product.title)
        expect(html).toContain(product.imageUrl)
        expect(html).toContain(`US ${product.price}`)
        expect(html).toContain(product.description)
    })

    it("should call addProductToCart when the button is clicked", () => {
        productItem.render()
        const productElement = productItem.createRootElement.mock.results[0].value
        const addCartButton = productElement.querySelector("button")
        addCartButton.click()

        expect(App.addProductToCart).toHaveBeenCalledWith(product)
    })
})