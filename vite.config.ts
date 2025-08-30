import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/EnsenaPe/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
