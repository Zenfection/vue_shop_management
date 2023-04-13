import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Inspector from 'vite-plugin-vue-inspector'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dirs: ['./src/components'],
      dts: "./src/components.d.ts"
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
        /\.mdx?$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        // custom imports
        {
          'axios': [
            ['default', 'axios'],
          ],
          'animejs': [
            ['default', 'anime'],
          ],
          'aos': [
            ['default', 'Aos'],
          ],
          'pace-js': [
            ['default', 'Pace'],
          ],
        },
        // import { createImageKitVue } from "imagekit-vue3"
        {
          from: 'imagekit-vue3',
          imports: ['createImageKitVue', 'IKImage', 'IKContext', 'IKUpload', 'IKVideo'],
        },
        {
          from: 'tiny-slider/src/tiny-slider',
          imports: ['tns'],
        },
        {
          from: '@/global/index.js',
          imports: ['images', 'contents', 'api'],
        }
      ],
      dts: "./src/auto-imports.d.ts",
      dirs: [
        './src/stores',
        './src/services',
      ],
    }),
    vue(),
    Pages({
      dirs: ['./src/views'],
    }),
    Layouts(),
    Inspector(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  // server port
  server: {
    port: 8080,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   }
    // },
    // https: true,
    sourcemapIgnoreList(sourcePath, sourcemapPath) {
      return sourcePath.includes('node_modules')
    },
  },
  optimizeDeps: {
    include: ['axios'],
  },
})
