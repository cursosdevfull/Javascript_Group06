import { User } from "./user.js"
import { UserItem } from "./user-item.js"
import { Selectors } from "./selectors.js";
import { clear, showSection } from "./utils.js";
import { UserDetail } from "./user-detail.js";
import { Tabs } from "./tabs.js";

export class UserList {
    constructor(service) {
        this.service = service
        this.loadTabs()
        this.loadUsers();
    }

    loadTabs() {
        this.tabs = new Tabs()
    }

    async selectUser(evt) {
        this.service.userIdSelected = evt.currentTarget.dataset.userId
        showSection(Selectors.userDetailsSection)
        clear(Selectors.userInfo)

        const response = await this.service.loadUserById(this.service.userIdSelected)

        new UserDetail(response[0]).render(Selectors.userInfo)

        Selectors.tabTodos.click()
    }


    async loadUsers() {
        const response = await this.service.loadUsers();
        const users = response.map(
            (el) =>
                new User({
                    id: el.id,
                    name: el.name,
                    username: el.username,
                    email: el.email,
                    address: el.address,
                    phone: el.phone,
                    website: el.website,
                    company: el.company,
                })
        );

        const items = users.map(user => new UserItem(user).render(this.selectUser.bind(this)))
        items.forEach(it => Selectors.usersGrid.appendChild(it))
    }
}
