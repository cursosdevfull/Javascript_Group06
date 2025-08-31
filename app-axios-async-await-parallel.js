async function call() {
    console.time("Promises in a row")
    const albums = axios.get("https://jsonplaceholder.typicode.com/albums?userId=8")
    const posts = axios.get("https://jsonplaceholder.typicode.com/posts?userId=8")

    const results = await Promise.all([albums, posts])

    console.timeEnd("Promises in a row")
    console.log(results[0].data)
    console.table(results[1].data)
}

call()
