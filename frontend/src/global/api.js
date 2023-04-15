const api = {
    // check import.meta.env.NODE_ENV
    backend: import.meta.env.NODE_ENV === 'development' ? 'http://localhost:3000' : import.meta.env.VITE_BACKEND_API
}

export default api
