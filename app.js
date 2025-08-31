const request = new XMLHttpRequest()

const myPromise = new Promise((resolve, reject) => {
    request.open("get", "https://jsonplaceholder.typicode.com/users")
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            const results = JSON.parse(request.responseText)
            resolve(results)
        }
    }
    request.onerror = function (err) {
        reject(err)
    }

    request.send()
})

/* myPromise.then((data) => {
    console.log("promise resolved")
    console.log(data)
}, (error) => {
    console.log("promise rejected")
    console.log(error)
}) */

/* myPromise
    .then((data) => {
        console.log("promise resolved")
        console.log(data)
    })
    .catch((error) => {
        console.log("promise rejected")
        console.log(error)
    }) */


myPromise
    .then((data) => {
        console.log("promise resolved")
        console.log(data)
    })

console.log("Promise in javascript")
console.log("Promises handle async operations")


myPromise
    .catch((error) => {
        console.log("promise rejected")
        console.log(error)
    })




/*
    get -> consultas
    post -> inserciones
    put -> actualizaciones
    delete -> eliminaciones
    patch -> actualizaciones
    options -> conocer capacidades del servidor
*/