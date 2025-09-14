import { describe, expect, vi } from "vitest"

import { ElementAttribute } from "./element-attribute.js"

describe("ElementAttribute", () => {
    it("should initialize with the correct values", () => {
        const name = "class"
        const value = "btn-primary"

        const elementAttribute = new ElementAttribute(name, value)

        expect(elementAttribute).toHaveProperty("name")
        expect(elementAttribute).toHaveProperty("value")
        expect(elementAttribute.name).toBe(name)
        expect(elementAttribute.value).toBe(value)
    })

    it("should handle empty values", () => {
        const name = ""
        const value = ""

        const elementAttribute = new ElementAttribute(name, value)

        expect(elementAttribute).toHaveProperty("name")
        expect(elementAttribute).toHaveProperty("value")
        expect(elementAttribute.name).toBe(name)
        expect(elementAttribute.value).toBe(value)
    })

})
