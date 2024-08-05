import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://blueflame202.github.io/',
  base: 'lemonade-astro',
  integrations: [tailwind(), react(), mdx()]
});