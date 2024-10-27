import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',  // Set environment ke jsdom untuk testing komponen React
    globals: true,         // Mengaktifkan penggunaan global seperti "describe", "test", "expect" dari Vitest
    // setupFiles: './setupTests.js'  // File setup tambahan jika dibutuhkan
  }
})
