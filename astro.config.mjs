import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://replaceme.com',
  integrations: [tailwind(), sitemap({
    filter: (page) => !/https:\/\/replaceme\.com\/blog\/[0-9]+/.test(page),
  }),
  ],
});
