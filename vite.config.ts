import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        about: './components/about.html',
        contacts: './components/contacts.html',
        projects: './components/projects.html',
        resume: './components/resume.html',
      },
    },
  },
  server: {
    open: true,
  },
});
