// "https://jsonplaceholder.typicode.com/users"

/* const response = fetch("https://jsonplaceholder.typicode.com/users")

const step01 = response.then((returnValue) => { return returnValue.json() })

step01.then((res) => { console.log(res) }) */

/* fetch("https://jsonplaceholder.typicode.com/users")
    .then((returnValue) => { return returnValue.json() })
    .then((res) => { console.log(res) }) */

fetch("https://jsonplaceholder.typicode.com/users")
    .then((returnValue) => returnValue.json())
    .then(console.log)
    .catch(error => { console.error("An error happened", error) })