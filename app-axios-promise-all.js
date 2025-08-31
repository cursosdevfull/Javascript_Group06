console.time("Measure response time")

const promiseUsers = axios.get("https://jsonplaceholder.typicode.com/users/8")
    .then(response => {
        console.dir(response.data)
        const userId = response.data.id

        return Promise.resolve(userId)
    })

const p01 = promiseUsers
    .then(userId => axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId))


const p02 = promiseUsers
    .then(userId => axios.get("https://jsonplaceholder.typicode.com/albums?userId=" + userId))


Promise
    .all([p01, p02])
    .then(results => {
        console.table(results[0].data)
        console.table(results[1].data)
        console.timeEnd("Measure response time")
    })
    .catch(console.error)
