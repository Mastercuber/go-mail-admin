import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
/*import vuetify from './src/plugins/vuetify'*/
import { transformAssetUrls } from "vite-plugin-vuetify"

export default defineConfig({
  base: './',
  optimizeDeps: {
    include: ['vuetify']
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
   /* vuetify*/
  ]
})
