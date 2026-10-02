import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),       // 1. المحرك الرسمي والنظيف لـ React 
    tailwindcss(), // 2. معالج التنسيق السريع لـ Tailwind v4
  ],
  server: {
    port: 3000    
  }
})
