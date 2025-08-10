const userRoles = ["ADMIN", "OPERATOR"]

const rolesAllowed = ["BILLING", "ADMIN"]

let isAllowed = false

for (const role of userRoles) {
    isAllowed = rolesAllowed.includes(role)
    if (isAllowed) {
        break
    }
}

console.log("user allowed", isAllowed)