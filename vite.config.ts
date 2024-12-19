import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/newPortfolio/' : '/',
  root: './',
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, './components/about.html'),
        projects: resolve(__dirname, './components/projects.html'),
      },
    },
  },
  server: {
    open: true,
  },
});
