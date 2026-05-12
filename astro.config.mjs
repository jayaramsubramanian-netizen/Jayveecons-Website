// astro.config.mjs — UPGRADED
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ── Set this to your actual domain ──
  site: 'https://www.jayveecons.com',

  // Static output — works perfectly on Hostinger shared hosting
  output: 'static',

  // Build directory (default = dist/) — upload ALL contents of dist/ to Hostinger
  build: {
    // Hostinger shared hosting serves from public_html/
    // After build: upload everything inside dist/ into public_html/
    assets: '_assets',          // keeps asset files in a clean subfolder
  },

  integrations: [
    sitemap({
      // Optional: exclude pages you don't want indexed
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],

  // Image optimisation (Astro built-in)
  image: {
    // Use the default Sharp service (already included in Astro)
    remotePatterns: [],
  },

  // Vite settings for better performance
  vite: {
    build: {
      // Split large chunks for better caching
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});
