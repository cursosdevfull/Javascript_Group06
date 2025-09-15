export class Component {
    rootId = null

    constructor(rootId, isRendered = true) {
        this.rootId = rootId

        if (isRendered) this.render()
    }

    render() {
        console.log("Calling method render")
    }

    createRootElement(tag, cssClass, attributes) {
        const root = document.createElement(tag)

        if (cssClass) {
            root.className = cssClass
        }

        if (attributes && attributes.length) {
            for (const attr of attributes) {
                if (attr.name && attr.value) root.setAttribute(attr.name, attr.value)
            }
        }

        document.getElementById(this.rootId).append(root)

        return root
    }
}
