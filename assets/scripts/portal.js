import { Service } from "./service.js"
import { UserList } from "./user-list.js"

class Portal {
    constructor(service) {
        new UserList(service)

    }
}

const service = Service.create()
new Portal(service)