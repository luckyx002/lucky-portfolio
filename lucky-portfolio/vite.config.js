 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lucky-portfolio/', // Yahan apne repo ka naam daalo
})