import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: set this to your production domain so canonical/OG/sitemap URLs resolve correctly.
  site: 'https://heliosat.com',
  output: 'static',
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
});
