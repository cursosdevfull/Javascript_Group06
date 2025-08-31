# Promesas

## Descripción
Este repositorio contiene ejemplos prácticos de diferentes formas de trabajar con Promesas en JavaScript, incluyendo XMLHttpRequest, Fetch API, Axios, async/await, y métodos de manejo de promesas paralelas.

## Estructura del Proyecto

### 1. **app.js** - Promesas Básicas con XMLHttpRequest
Implementación de promesas usando XMLHttpRequest nativo:
```javascript
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
```

### 2. **app-fetch.js** - Fetch API
Uso de la API Fetch moderna para realizar peticiones HTTP:
```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((returnValue) => returnValue.json())
    .then(console.log)
    .catch(error => { console.error("An error happened", error) })
```

### 3. **app-axios.js** - Axios Básico
Implementación simple con Axios:
```javascript
axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => console.log(response.data))
    .catch(error => console.error(error))
    .finally(() => console.log("Promise finished"))
```

### 4. **app-axios-secuencial.js** - Ejecución Secuencial
Peticiones HTTP secuenciales usando promesas:
```javascript
axios.get("https://jsonplaceholder.typicode.com/users/8")
    .then(response => {
        const userId = response.data.id
        return axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    })
    .then(response => console.table(response.data))
```

### 5. **app-axios-async-await.js** - Async/Await
Uso de async/await para hacer el código más legible:
```javascript
async function call() {
    const user = await axios.get("https://jsonplaceholder.typicode.com/users/8")
    const { id, name } = user.data
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + id)
    
    console.log("name", name)
    console.table(posts.data)
}
```

### 6. **app-axios-paralelo.js** - Ejecución Paralela
Múltiples peticiones usando una promesa base:
```javascript
const promiseUsers = axios.get("https://jsonplaceholder.typicode.com/users/8")

promiseUsers
    .then(userId => axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId))
    .then(response => console.table(response.data))

promiseUsers
    .then(userId => axios.get("https://jsonplaceholder.typicode.com/albums?userId=" + userId))
    .then(response => console.table(response.data))
```

### 7. **app-axios-async-await-parallel.js** - Async/Await Paralelo
Ejecución paralela con async/await y Promise.all:
```javascript
async function call() {
    const albums = axios.get("https://jsonplaceholder.typicode.com/albums?userId=8")
    const posts = axios.get("https://jsonplaceholder.typicode.com/posts?userId=8")
    
    const results = await Promise.all([albums, posts])
    console.log(results[0].data)
    console.table(results[1].data)
}
```

### 8. **app-axios-promise-all.js** - Promise.all
Uso de Promise.all para ejecutar múltiples promesas en paralelo:
```javascript
Promise
    .all([p01, p02])
    .then(results => {
        console.table(results[0].data)
        console.table(results[1].data)
    })
    .catch(console.error)
```

### 9. **app-axios-promise-all-settled.js** - Promise.allSettled
Uso de Promise.allSettled que espera a que todas las promesas se resuelvan o rechacen:
```javascript
Promise
    .allSettled([p01, p02])
    .then(results => {
        console.log(results[0].value.data)
        console.log(results[1].value.data)
    })
```

### 10. **app-axios-promise-race.js** - Promise.race
Promise.race que se resuelve con el primer resultado disponible:
```javascript
Promise
    .race([p01, p02])
    .then(results => {
        console.log(results)
    })
    .catch(console.error)
```

### 11. **app-axios-async-await-auto-invoke.js** - IIFE Async
Función async auto-invocada (Immediately Invoked Function Expression):
```javascript
(async (name, lastname) => {
    const albums = axios.get("https://jsonplaceholder.typicode.com/albums?userId=8")
    const posts = axios.get("https://jsonplaceholder.typicode.com/posts?userId=8")
    
    const results = await Promise.all([albums, posts])
    console.log("name", name)
    console.log("lastname", lastname)
})("Josefina", "Corcuera")
```

## Conceptos Clave

### Promesas (Promises)
- **Estados**: pending, fulfilled, rejected
- **Métodos**: `.then()`, `.catch()`, `.finally()`
- **Creación**: `new Promise((resolve, reject) => {})`

### Async/Await
- **async**: Declara una función asíncrona
- **await**: Espera a que se resuelva una promesa
- **Ventajas**: Código más legible y fácil de debuggear

### Métodos de Promise
- **Promise.all()**: Espera a que todas las promesas se resuelvan
- **Promise.allSettled()**: Espera a que todas las promesas terminen (resueltas o rechazadas)
- **Promise.race()**: Se resuelve con la primera promesa que termine

### Ejecución
- **Secuencial**: Una petición después de otra
- **Paralela**: Múltiples peticiones simultáneas

## API Utilizada
- **JSONPlaceholder**: API REST falsa para pruebas y prototipos
- **Endpoints**: 
  - `/users` - Lista de usuarios
  - `/posts` - Publicaciones
  - `/albums` - Álbumes

## Tecnologías
- JavaScript ES6+
- Axios
- Fetch API
- XMLHttpRequest