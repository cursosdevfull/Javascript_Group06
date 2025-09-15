import http from "http"
import express from "express"

const products = [
    {
        title: "Headrest",
        imageUrl: "https://linensociety.com/cdn/shop/products/heirloom-pillow_14294b09-8232-4d5d-a305-022b802669ab_1800x1440.jpg?v=1584402804",
        description: "Afforable and cozy headrest",
        price: 100
    },
    {
        title: "Cutlery",
        imageUrl: "https://www.cutlery.uk.com/wp-content/uploads/2020/10/SheffFiddleClassic.jpg",
        description: "Steel cutlery",
        price: 200
    },
    {
        title: "Night Table",
        imageUrl: "https://m.media-amazon.com/images/I/61Tej+qYSES.jpg",
        description: "Roman style night table",
        price: 500
    },
    {
        title: "Purse",
        imageUrl: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/3992/PMP20000686134/full_image-1.png",
        description: "Modern purse",
        price: 350
    },
    {
        title: "Couch",
        imageUrl: "https://www.thespruce.com/thmb/65l9i7kdcdic4mVKvKykx1Bq6bs=/3360x0/filters:no_upscale():max_bytes(150000):strip_icc()/signs-to-replace-your-couch-4165258-hero-5266fa7b788c41f6a02f24224a5de29b.jpg",
        description: "Greek style couch",
        price: 900
    }
]

const app = express()

app.use(express.static("./public"))

app.get("/products", (request, response) => {
    response.json(products)
})

app.use((request, response) => {
    response.status(404).send("Path not found")
})

const server = http.createServer(app)

server.listen(3000, () => console.log("Server is running on port 3000"))

/* const server = http.createServer((request, response) => {
    if (request.url === "/products") {
        response.writeHead(200, { "content-type": "application/json" })
        response.write(JSON.stringify(products))
        response.end()
    } else {
        response.writeHead(200, { "content-type": "text/plain" })
        response.write("Path by default")
        response.end()
    }
}) */

