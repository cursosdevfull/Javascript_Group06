export class Service {
    static instance
    pathApi = "https://jsonplaceholder.typicode.com"

    userSelectedId

    static create() {
        if (!this.instance) {
            this.instance = new Service()
        }

        return this.instance
    }

    loadUsers() {
        return fetch(`${this.pathApi}/users`).then(response => response.json())
    }

    loadUserById(id) {
        return fetch(`${this.pathApi}/users?id=${id}`).then(response => response.json())
    }

    loadTodosByUserId(id) {
        return fetch(`${this.pathApi}/todos?userId=${id}`).then(response => response.json())
    }

    loadPostsByUserId(id) {
        return fetch(`${this.pathApi}/posts?userId=${id}`).then(response => response.json())
    }

    loadCommentsByPostId(id) {
        return fetch(`${this.pathApi}/comments?postId=${id}`).then(response => response.json())
    }

    loadAlbumsByUserId(id) {
        return fetch(`${this.pathApi}/albums?userId=${id}`).then(response => response.json())
    }

    loadPhotosByAlbumId(id) {
        return fetch(`${this.pathApi}/photos?albumId=${id}`).then(response => response.json())
    }
}