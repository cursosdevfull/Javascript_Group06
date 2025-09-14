import { describe, expect, it, vi } from "vitest"

import { App } from "./app.js"

vi.mock("./app.js", () => {
    return {
        App: {
            init: vi.fn()
        }
    }
})

describe("Main", () => {
    it("should call App.init on load", async () => {
        import("./main.js")

        await vi.waitFor(() => {
            expect(App.init).toHaveBeenCalled()
            //expect(App.init).toHaveBeenCalledTimes(10)
        })
    })

    it("should call once App.init on load", async () => {
        import("./main.js")

        await vi.waitFor(() => {
            expect(App.init).toBeCalledTimes(1)
        })
    })
})