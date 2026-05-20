# Jayveecons Website — Astro Project

Welcome! This is your website, converted to the **Astro** framework.
Below are simple step-by-step instructions to get it running on your computer.

---

## What's Inside

```
jayveecons-astro/
│
├── public/                  ← Put your images, logo, fonts here
│   └── logo.png             ← Copy your logo here
│
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro ← The shared HTML shell (head, nav, footer)
│   │
│   ├── components/
│   │   ├── Nav.astro        ← The navigation bar (used automatically)
│   │   └── Footer.astro     ← The footer (used automatically)
│   │
│   ├── pages/               ← Each file here = one URL on your website
│   │   ├── index.astro      → jayveecons.com/
│   │   ├── about.astro      → jayveecons.com/about
│   │   ├── services.astro   → jayveecons.com/services
│   │   ├── products.astro   → jayveecons.com/products
│   │   ├── industries.astro → jayveecons.com/industries
│   │   └── contact.astro    → jayveecons.com/contact
│   │
│   └── styles/
│       └── global.css       ← Brand colours, fonts, nav/footer styles
│
├── astro.config.mjs         ← Astro configuration (you rarely touch this)
└── package.json             ← Project info and dependencies
```

---

## Step 1 — Install Node.js (one-time setup)

Astro needs **Node.js** to run. If you don't have it:

1. Go to https://nodejs.org
2. Download the **LTS** version (the green button)
3. Install it — just click Next/Continue through the installer
4. To check it worked, open a Terminal/Command Prompt and type:
   ```
   node --version
   ```
   You should see something like `v20.10.0`

---

## Step 2 — Copy Your Images

Before running the site, copy your images into the right place:

1. Copy `logo.png` into the **`public/`** folder
2. If you have an `images/` folder with product photos, copy the whole
   `images/` folder into **`public/`** so it becomes `/images/`

---

## Step 3 — Install Project Dependencies

Open a Terminal (Mac/Linux) or Command Prompt (Windows), navigate to this folder, and run:

```bash
npm install
```

This downloads Astro and everything it needs. It only takes a minute.
You'll see a `node_modules/` folder appear — that's normal, don't touch it.

---

## Step 4 — Start the Development Server

```bash
npm run dev
```

Then open your browser and go to: **http://localhost:4321**

You should see your website! 🎉

Any time you edit a `.astro` or `.css` file, the browser will automatically
refresh to show your changes.

---

## Step 5 — Build for Production (when you're ready to go live)

```bash
npm run build
```

This creates a `dist/` folder with your finished website — plain HTML, CSS, and
JavaScript files ready to upload to any web host.

To preview the built version locally:
```bash
npm run preview
```

---

## How to Make Changes

### Change the navigation links
Edit `src/components/Nav.astro`

### Change the footer
Edit `src/components/Footer.astro`

### Change a page's content
Edit the matching file in `src/pages/` — e.g. `about.astro` for the About page

### Change brand colours or fonts
Edit `src/styles/global.css` — look for the `:root { }` block at the top

### Add a new page
Create a new file in `src/pages/` — e.g. `src/pages/careers.astro`
Copy the top section (the `---` frontmatter block) from any existing page and
fill in your content.

---

## Deploying (Going Live)

### Option A — Netlify (easiest, free)
1. Push this folder to a GitHub repository
2. Go to https://netlify.com and connect your GitHub repo
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click Deploy — done!

### Option B — Vercel (also free)
1. Push to GitHub
2. Go to https://vercel.com and import your repo
3. Vercel auto-detects Astro — just click Deploy

### Option C — Upload manually
Run `npm run build`, then upload everything inside the `dist/` folder
to your web host via FTP or cPanel file manager.

---

## Need Help?

- Astro documentation: https://docs.astro.build
- Astro Discord (friendly community): https://astro.build/chat
