import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // served from https://meghaboi.github.io/kira-landing/
  base: '/kira-landing/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
});
