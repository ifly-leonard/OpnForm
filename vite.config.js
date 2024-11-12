import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue2'
import basicSsl from '@vitejs/plugin-basic-ssl';

const host = 'opnform.test';

export default defineConfig({
  esbuild: {
    minify: false,
    minifySyntax: false
  },
  plugins: [
    laravel({
      input: [
        'resources/js/app.js'
      ],
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    }),
    // basicSsl() // This enables HTTPS with a self-signed certificate
  ],
  optimizeDeps: {
    exclude: [
      'vt-notifications', 'vue-tailwind', 'vue-tailwind/dist/vue-tailwind.css'
    ]
  },
  resolve: {
    alias: {
      '~': '/resources/js',
      '@': '/resources'
    }
  },
  // server: {
  //   host,
  //   hmr: { host },
  //   https: true, // Enable HTTPS without needing the custom certificate path
  // },
})
