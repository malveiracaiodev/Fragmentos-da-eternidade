import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Garanta que a palavra 'plugin-' esteja aqui

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});