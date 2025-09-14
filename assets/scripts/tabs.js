import { Selectors } from "./selectors.js";

export class Tabs {

    constructor() {
        this.bindings()
    }

    bindings() {
        Selectors.tabTodos.addEventListener("click", () => { alert("tabTodos") })
        Selectors.tabPosts.addEventListener("click", () => { })
        Selectors.tabAlbums.addEventListener("click", () => { })
    }
}