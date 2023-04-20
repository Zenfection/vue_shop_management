export const api = {
    backend: import.meta.env.MODE === 'development' ? 'http://localhost:3000' : import.meta.env.VITE_BACKEND_API,
    imagekit: {
        urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
        publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
        privateKey: import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY
    }
}
