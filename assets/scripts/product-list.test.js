import { beforeEach, afterEach, describe, it, expect, vi } from "vitest"

import { Component } from "./component.js"
import { ProductItem } from "./product-item.js"
import { ProductList } from "./product-list.js"
import { Product } from "./product.js"
import { ElementAttribute } from "./element-attribute.js"

vi.mock("./component.js", () => {
    return {
        Component: class {
            createRootElement = vi.fn()
        }
    }
})

vi.mock("./product-item.js", () => {
    return {
        ProductItem: vi.fn()
    }
})

describe("ProductList", () => {
    let productList
    const id = "id-test"

    beforeEach(() => {
        vi.resetAllMocks()

        const rootElement = document.createElement("div")
        rootElement.id = id
        document.body.appendChild(rootElement)

        productList = new ProductList(id)
    })

    afterEach(() => {
        document.body.innerHTML = ""
    })

    it("should initialize with a non-empty products array", () => {
        expect(productList.products.length).toBeGreaterThan(3)
        expect(productList.products[0]).toBeInstanceOf(Product)
        expect(productList.products[0].title).toBe("Pillow")
    })

    it("should render the product list correctly", () => {
        productList.render()
        expect(productList.createRootElement).toHaveBeenCalledWith("ul", "product-list", [new ElementAttribute("id", "prod-list")])
    })

    it("should render products correctly", () => {
        expect(ProductItem).toHaveBeenCalledTimes(5)
        expect(ProductItem).toHaveBeenCalledWith(expect.any(Product), "prod-list")
    })
})