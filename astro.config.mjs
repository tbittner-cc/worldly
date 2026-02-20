// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://astro.build/config
export default defineConfig({
  base: '/worldly',
  trailingSlash: 'ignore',

  vite: {
    plugins: [tailwindcss()],
  }
});