axios.get("https://jsonplaceholder.typicode.com/users/8")
    .then(response => {
        console.dir(response.data)
        const userId = response.data.id

        return axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    })
    .then(response => console.table(response.data))
    .catch(error => console.error(error))
    .finally(() => console.log("Promise finished"))