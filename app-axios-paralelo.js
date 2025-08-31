const promiseUsers = axios.get("https://jsonplaceholder.typicode.com/users/8")
    .then(response => {
        console.dir(response.data)
        const userId = response.data.id

        return Promise.resolve(userId)
    })

promiseUsers
    .then(userId => axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId))
    .then(response => console.table(response.data))

promiseUsers
    .then(userId => axios.get("https://jsonplaceholder.typicode.com/albums?userId=" + userId))
    .then(response => console.table(response.data))

