import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Fragmentos-da-eternidade/', // <-- ADICIONA ESTA LINHA EXATAMENTE ASSIM
})