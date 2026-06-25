import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://nirec1810.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  integrations: [
    sitemap(),
  ],
  experimental: {
    clientPrerender: true,
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
})