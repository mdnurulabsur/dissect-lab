import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mdnurulabsur.github.io',
  base: '/dissect-lab',

  vite: {
    plugins: [tailwindcss()],
  },
});
