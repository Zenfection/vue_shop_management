import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as dotenv from 'dotenv'
dotenv.config()

// BACKEND_URL_DEV, BACKEND_URL_PROD
const backendUrl = process.env.PROJECT == 'production'
  ? process.env.BACKEND_URL_PROD
  : process.env.BACKEND_URL_DEV;

console.log('backendUrl', backendUrl)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server port
  server: {
    // host: true,
    port: 8080,
    proxy: {
      '/api': {
        target: backendUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
    //https: true,
    sourcemapIgnoreList(sourcePath, sourcemapPath) {
      return sourcePath.includes('node_modules')
    }
  }
})
