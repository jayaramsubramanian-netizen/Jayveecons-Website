// astro.config.mjs — Static output for EmailJS + Hostinger
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.jayveecons.com",

  // Static — EmailJS runs client-side, no server needed
  output: "static",

  build: {
    assets: "_assets",
  },

  integrations: [
    sitemap({
      filter: (page) => ![
        "/thank-you",
        "/products1",
        "/industry",
        "/api/",
      ].some((path) => page.includes(path)),
    }),
  ],

  image: {
    remotePatterns: [],
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});
