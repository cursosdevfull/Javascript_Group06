import { describe, it, vi, expect, beforeEach, afterEach } from "vitest";

import { Component } from "./component.js";

describe("Component", () => {
    let component;
    let container;
    let id = "test-container";

    beforeEach(() => {
        container = document.createElement("div");
        container.id = id;
        document.body.appendChild(container);

        component = new Component(id, false);
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    it("should initialize with the correct values", () => {
        expect(component.rootId).toBe(id);
    });

    it("should call render method if isRendered is true", () => {
        const renderFake = vi.spyOn(Component.prototype, "render");
        new Component(id, true);
        expect(renderFake).toHaveBeenCalled();
        renderFake.mockRestore();
    });

    it("should call render method if isRendered is false", () => {
        const renderFake = vi.spyOn(Component.prototype, "render");
        new Component(id, false);
        expect(renderFake).not.toHaveBeenCalled();
        renderFake.mockRestore();
    });

    it("should create a root element with the correct attributes", () => {
        const attributes = [
            {
                name: "data-test",
                value: "value-test",
            },
            { name: "id", value: "id-test" },
        ];

        const rootElement = component.createRootElement("div", "class-tes", attributes)

        expect(rootElement.getAttribute("data-test")).toBe(attributes[0].value)
        expect(rootElement.getAttribute("id")).toBe(attributes[1].value)
    });

    it("should append the root element to the container", () => {
        const rootElement = component.createRootElement("div", "class-test")
        expect(container.contains(rootElement)).toBe(true)
    })
});
