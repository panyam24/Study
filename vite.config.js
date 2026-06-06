import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Studysync/', 
  plugins: [react()],
  build: {
    outDir: 'docs',  
  },
  server: {
    allowedHosts: true
  },
})
