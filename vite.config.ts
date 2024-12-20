import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/newPortfolio/' : '/',
  server: {
    open: true,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'public/pics',
          dest: '',
        },
      ],
    }),
  ],
});
