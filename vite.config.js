import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/salati/",
  plugins: [react()],
  build: {
    outDir: 'dist', // This should be the output directory
  },
})
