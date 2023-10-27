import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      runtimeCaching: [{
        urlPattern: ({ url }) => {
          return url.pathname.startsWith('/api')
        },
        handler: 'CacheFirst',
        // handler: 'NetworkFirst',
        options: {
          cacheName: 'api-cache',
          // expiration: {
          //   maxAgeSeconds: 60 * 60 * 24 * 7
          // },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }]
    }
  })]
})
