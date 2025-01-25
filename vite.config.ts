import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/drongo/user/login':'http://49.13.61.252'
    }
  },
  plugins: [react()],
})
