import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Define rewrites here for development purposes
    middlewareMode: 'html',
    proxy: {
      '/': {
        target: '/index.html',
        rewrite: (path) => path.replace(/^(\/.*)/, '/index.html'),
      },
    },
  },
});
