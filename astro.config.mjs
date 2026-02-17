// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: isProd ? 'https://nexxess.github.io' : 'http://localhost:4321',
  base: isProd ? '/hair-ritual-by-tuba' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});