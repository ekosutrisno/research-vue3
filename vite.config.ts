import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [vue(), VitePWA({
    manifest: {
      name: "ExoPry",
      short_name: "ExoPry",
      theme_color: "#0F172A",
      background_color: "#131C21",
      icons: [
        {
          "src": "img/icons/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "img/icons/android-chrome-maskable-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "img/icons/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        },
        {
          "src": "img/icons/apple-touch-icon.png",
          "sizes": "180x180",
          "type": "image/png"
        },
        {
          "src": "img/icons/favicon-16x16.png",
          "sizes": "16x16",
          "type": "image/png"
        },
        {
          "src": "img/icons/favicon-32x32.png",
          "sizes": "32x32",
          "type": "image/png"
        }
      ]
    }
  })]
})
