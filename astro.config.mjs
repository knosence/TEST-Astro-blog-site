import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://replaceme.com',
  integrations: [tailwind(), sitemap({
    filter: (page) => !/https:\/\/replaceme\.com\/blog\/[0-9]+/.test(page),
    customPages: [
      'https://replaceme.com/discord',
      'https://replaceme.com/twitter',
    ],
    changefreq: 'weekly',
    lastmod: new Date(),
    priority: 0.85,
    serialize: (item) => {
      if (item.url.at(-1) === '/') {
        item.url = item.url.slice(0, -1);
      }
      return item;
    },
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        es: 'es-ES',
        fr: 'fr-CA',
      },
    },
    
  }),
  ],
});
