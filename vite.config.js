import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      // name: 'React App',
      // short_name: 'React App',
      // start_url: '/',
      // display: 'standalone',
      // background_color: '#ffffff',
      // description: 'Web site created using create-react-app',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        }
      ]
    }
  })]
})
