import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Inspector from 'vite-plugin-vue-inspector'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    Components({
      dirs: ['./src/components'],
      dts: "./src/components.d.ts"
    }),
    VueRouter({
      routesFolder: './src/pages',
      extensions: ['.vue'],
      dts: './src/typed-router.d.ts',
      importMode: 'async',
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
        /\.mdx?$/, // .md
      ],
      imports: [
        'vue',
        'pinia',
        VueRouterAutoImports,
        '@vueuse/head',
        {
          'animejs': [
            ['default', 'anime'],
          ],
        },
        {
          from: 'imagekit-vue3',
          imports: ['createImageKitVue', 'IKImage', 'IKContext', 'IKUpload', 'IKVideo'],
        },
        {
          from: 'tiny-slider/src/tiny-slider',
          imports: ['tns'],
        },
      ],
      dts: "./src/auto-imports.d.ts",
      dirs: [
        './src/global/',
        './src/stores/',
        './src/services/**',
      ],
    }),
    vue(),
    Layouts(),
    Inspector({})],

  server: {
    port: 8080,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'pinia',
      'axios',
      'animejs',
      'imagekit-vue3',
    ],
  },
})
