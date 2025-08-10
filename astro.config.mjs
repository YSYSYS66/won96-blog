export const astroConfig = `import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.won96.com',
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],
  build: { inlineStylesheets: 'auto' }
});`;

