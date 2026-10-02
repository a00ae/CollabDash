import react from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ 
      presets: [
        // تفعيل الـ Compiler الخاص بـ React 19 للتسريع التلقائي
        ['@babel/preset-react', { runtime: 'automatic' }] 
      ] 
    })
  ],
  server: {
    port: 3000
  }
})
