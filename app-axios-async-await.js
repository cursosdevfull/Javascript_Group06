
async function call() {
    const user = await axios.get("https://jsonplaceholder.typicode.com/users/8")
    const { id, name } = user.data

    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + id)

    console.log("name", name)
    console.table(posts.data)
}

call()



/* axios.get("https://jsonplaceholder.typicode.com/users/8")
    .then(response => {
        console.dir(response.data)
        const userId = response.data.id

        return axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    })
    .then(response => console.table(response.data))
    .catch(error => console.error(error))
    .finally(() => console.log("Promise finished")) */