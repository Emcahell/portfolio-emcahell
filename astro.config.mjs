// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; 

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: []
  },

  site: 'https://portfolio-emcahell.vercel.app',

  integrations: [ 
    sitemap(), react(), tailwind({
    applyBaseStyles: true,
  })]
});