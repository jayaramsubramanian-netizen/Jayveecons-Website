// astro.config.mjs — SSR mode for Hostinger Node.js hosting
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

export default defineConfig({
  // ── Your domain ──
  site: "https://www.jayveecons.com",

  // SSR mode — required for the /api/contact nodemailer endpoint
  // Hostinger runs this as a Node.js server (same as Sreenarthana)
  output: "server",
  adapter: node({ mode: "standalone" }),

  build: {
    assets: "_assets",
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes("/thank-you"),
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
