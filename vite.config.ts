import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@mocks': path.resolve(__dirname, './src/mocks'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/pallete.scss" as *;`
      }
    }
  },
})
