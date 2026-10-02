import react from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev
export default defineConfig({
  plugins: [
    react(), // 1. محرك React الأساسي أولاً
    tailwindcss(), // 2. معالج التنسيق Tailwind
    babel({ 
      presets: [
        // تفعيل الـ Compiler الخاص بـ React للتسريع التلقائي بدون استدعاء متغيرات غير مستخدمة
        ['@babel/preset-react', { runtime: 'automatic' }] 
      ] 
    })
  ],
  server: {
    port: 3000
  }
})
