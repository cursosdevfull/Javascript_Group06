const usersGrid = document.getElementById("users-grid")
const userCardTemplate = document.getElementById("user-card-template")
const userDetailsTemplate = document.getElementById("user-details-template")
const userSection = document.getElementById("users-section")
const userInfo = document.getElementById("user-info")
const userDetailsSection = document.getElementById("user-details-section")
const postDetailsSection = document.getElementById("post-details-section")
const albumDetailsSection = document.getElementById("album-details-section")
const btnBackToUsers = document.getElementById("btn-back-to-users")
const tabTodos = document.getElementById("tab-todos")
const todosContent = document.getElementById("todos-content")
const tabPosts = document.getElementById("tab-posts")
const todosList = document.getElementById("todos-list")
const todoTemplate = document.getElementById("todo-template")
const postsContent = document.getElementById("posts-content")
const postsList = document.getElementById("posts-list")
const postTemplate = document.getElementById("post-template")
const tabAlbums = document.getElementById("tab-albums")
const albumsContent = document.getElementById("albums-content")
const albumsGrid = document.getElementById("albums-grid")
const albumTemplate = document.getElementById("album-template")
const commentsList = document.getElementById("comments-list")
const commentTemplate = document.getElementById("comment-template")
const photoModal = document.getElementById("photo-modal")
const modalImage = document.getElementById("modal-image")
const modalCaption = document.getElementById("modal-caption")
const modalClose = document.getElementById("modal-close")
const photosGrid = document.getElementById("photos-grid")
const photoTemplate = document.getElementById("photo-template")
const tabBtns = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".tab-content")
const btnBackToPosts = document.getElementById("btn-back-to-posts")
const btnBackToAlbums = document.getElementById("btn-back-to-albums")

const LOADERS = {
    usersLoading: "users-loading"
}

let userIdSelected = null
let postIdSelected = null

function showSection(element) {
    const sections = document.querySelectorAll(".section")
    sections.forEach(section => section.classList.remove("active"))

    console.log("element", element)

    element.classList.add("active")
}

async function loadTodosByUserId(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`).then(response => response.json())
}

async function showTodos(userId) {
    const todos = await loadTodosByUserId(userId)

    todosList.innerHTML = ""

    todos.forEach(todo => {
        const element = todoTemplate.content.cloneNode(true)

        element.querySelector(".todo-title").textContent = todo.title

        if (todo.completed) {
            element.querySelector("input[type=checkbox]").setAttribute("checked", true)
        }

        todosList.appendChild(element)
    })
}

async function loadPostsByUserId(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(response => response.json())
}

async function loadCommentsByPostId(id) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(response => response.json())
}

async function showPosts(userId) {
    const posts = await loadPostsByUserId(userId)

    postsList.innerHTML = ""

    posts.forEach(post => {
        const element = postTemplate.content.cloneNode(true)

        element.querySelector(".post-title").textContent = post.title
        element.querySelector(".post-body").textContent = post.body
        element.querySelector(".btn-view-comments").addEventListener("click", async () => {
            postIdSelected = post.id
            showSection(postDetailsSection)

            const comments = await loadCommentsByPostId(postIdSelected)

            clearElement(commentsList)

            comments.forEach(comment => {
                const element = commentTemplate.content.cloneNode(true)

                element.querySelector(".comment-name").textContent = comment.name
                element.querySelector(".comment-email").textContent = comment.email
                element.querySelector(".comment-body").textContent = comment.body

                commentsList.appendChild(element)
            })
        })

        postsList.appendChild(element)
    })
}

async function loadAlbumsByUserId(id) {
    return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`).then(response => response.json())
}

async function loadPhotosByAlbumId(id) {
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`).then(response => response.json())
}

async function showAlbums(userId) {
    const albums = await loadAlbumsByUserId(userId)

    albumsGrid.innerHTML = ""

    albums.forEach(album => {
        const element = albumTemplate.content.cloneNode(true)

        const randomNumber = Math.random()

        element.querySelector(".album-title").textContent = album.title
        element.querySelector(".album-thumb-img").setAttribute("src", "https://random-image-pepebigotes.vercel.app/api/random-image?" + randomNumber)
        element.querySelector(".btn-view-photos").addEventListener("click", async () => {
            clearElement(photosGrid)

            showSection(albumDetailsSection)

            const photos = await loadPhotosByAlbumId(album.id)

            photos.forEach(photo => {
                const randomNumber = Math.random()
                const randomImage = "https://random-image-pepebigotes.vercel.app/api/random-image?" + randomNumber
                const element = photoTemplate.content.cloneNode(true)

                element.querySelector(".photo-thumbnail").setAttribute("src", randomImage)
                element.querySelector(".photo-title").textContent = photo.title
                element.querySelector(".photo-item").addEventListener("click", () => {
                    photoModal.classList.add("active")
                    modalImage.setAttribute("src", randomImage)
                    modalCaption.textContent = photo.title
                    modalClose.addEventListener("click", () => photoModal.classList.remove("active"))
                })

                photosGrid.appendChild(element)
            })

        })

        albumsGrid.appendChild(element)
    })
}


function showSubsection(tabTitle, tabContent, cb) {
    tabBtns.forEach(btn => btn.classList.remove("active"))
    tabContents.forEach(btn => btn.classList.remove("active"))

    tabTitle.classList.add("active")
    tabContent.classList.add("active")

    cb(userIdSelected)
}

function bindings() {
    btnBackToUsers.addEventListener("click", showSection.bind(this, userSection))
    tabTodos.addEventListener("click", showSubsection.bind(this, tabTodos, todosContent, showTodos))
    tabPosts.addEventListener("click", showSubsection.bind(this, tabPosts, postsContent, showPosts))
    tabAlbums.addEventListener("click", showSubsection.bind(this, tabAlbums, albumsContent, showAlbums))
    btnBackToPosts.addEventListener("click", showSection.bind(this, userDetailsSection))
    btnBackToAlbums.addEventListener("click", showSection.bind(this, userDetailsSection))
}

async function loadUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
}

function loading(id, visible = true) {
    const loading = document.getElementById(id)

    if (visible) {
        loading.classList.add("active")
    } else {
        loading.classList.remove("active")
    }
}

function clearElement(el) {
    el.innerHTML = ""
}

async function loadUserById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`).then(response => response.json())
}

async function renderUserDetails(user) {
    const element = userDetailsTemplate.content.cloneNode(true)

    element.querySelector(".user-full-name").textContent = user.name
    element.querySelector(".user-username-detail").textContent = user.username
    element.querySelector(".user-email-detail").textContent = user.email
    element.querySelector(".user-phone").textContent = user.phone
    element.querySelector(".user-website").textContent = user.website
    element.querySelector(".user-address-street").textContent = user.address.street
    element.querySelector(".user-address-city").textContent = user.address.city
    element.querySelector(".user-address-zipcode").textContent = user.address.zipcode
    element.querySelector(".user-company-name").textContent = user.company.name
    element.querySelector(".user-company-catchphrase").textContent = user.company.catchPhrase
    element.querySelector(".user-company-bs").textContent = user.company.bs

    userInfo.appendChild(element)
}


async function renderUsers(users) {
    users.forEach(user => {
        const element = userCardTemplate.content.cloneNode(true)

        const userCard = element.querySelector(".user-card")
        userCard.setAttribute("data-user-id", user.id)
        userCard.addEventListener("click", async (evt) => {
            userIdSelected = evt.currentTarget.dataset.userId

            showSection(userDetailsSection)
            clearElement(userInfo)

            const users = await loadUserById(userIdSelected)
            renderUserDetails(users[0])

            tabTodos.click()
        })

        element.querySelector(".user-name").textContent = user.name
        element.querySelector(".user-username").textContent = user.username
        element.querySelector(".user-email").textContent = user.email
        element.querySelector(".user-company").textContent = user.company.name

        usersGrid.appendChild(element)
    })

}

async function users() {
    clearElement(usersGrid)

    loading(LOADERS.usersLoading, true)

    const users = await loadUsers()
    renderUsers(users)

    loading(LOADERS.usersLoading, false)
}

bindings()
users()