export class User {
    id
    name
    username
    email
    address
    phone
    website
    company

    constructor(props) {
        Object.assign(this, props)
    }
}