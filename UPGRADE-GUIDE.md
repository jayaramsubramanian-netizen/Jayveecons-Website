# Jayveecons Website — Complete Upgrade Guide
## All 6 Improvements: Implementation & Deployment

---

## 📁 FILES IN THIS PACKAGE

Drop these into your existing project — they replace the originals:

```
src/layouts/BaseLayout.astro         → Full SEO upgrade
src/components/Nav.astro             → Bug fix + accessibility
src/components/contact/ContactForm.astro → Email via EmailJS
src/styles/global.css                → Mobile-first CSS
astro.config.mjs                     → Site URL + build config
.github/workflows/deploy.yml         → Auto-deploy to Hostinger
```

---

## 1️⃣ MOBILE-FIRST RESPONSIVE — What Changed

Your site already had a burger menu — these changes improve it further:

### Changes made:
- **`global.css`**: Base styles now target mobile first, scale up with `@media (min-width:…)`
- **Footer grid**: Single column on mobile → 2 col tablet → 4 col desktop
- **Touch targets**: All links and buttons now meet the 44×44px WCAG minimum
- **`Nav.astro`**: Mobile menu max-height + scroll overflow fixed; Escape key closes menu
- **`ContactForm.astro`**: Checkbox grid → 1 col on small screens; form rows → 1 col on mobile

### For each page's inner content (index, services, products, etc.):
Add these responsive breakpoints to grids like `.products-grid`, `.ind-grid`, `.why-grid`:

```css
/* BEFORE (3 columns always) */
.products-grid { grid-template-columns: repeat(3, 1fr); }

/* AFTER (mobile-first) */
.products-grid { grid-template-columns: 1fr; }                     /* mobile */
@media (min-width: 640px)  { .products-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .products-grid { grid-template-columns: repeat(3, 1fr); } }
```

Apply the same pattern to:
- `.ind-grid` (4 col → 2 col tablet → 1 col mobile)
- `.why-grid` (2 col → 1 col mobile)
- `.track-grid` (4 col → 2 col → 1 col)
- `.wwd-grid` (2 col → 1 col)
- `.hero-inner` (2 col grid → 1 col on mobile)
- `.delivery-flow` on services page (4 col → 2 col → 1 col)
- `.svc-block` (280px sidebar → full width on mobile)

---

## 2️⃣ ASTRO ISLANDS & COMPONENTS — Refactoring Tips

Your project is already well-componentised (Nav, Footer, contact sub-components).
These are the remaining improvements:

### A. Move page `<style>` blocks out of pages and into components

Each page has a massive `<style>` block. Move sections into dedicated components:

```
src/components/home/
  HeroSection.astro       ← Move hero HTML + style from index.astro
  TrustBar.astro          ← Move .trust-bar section
  WhatWeDo.astro          ← Move .what-we-do section
  ProductsPreview.astro   ← Move .products section
  IndustriesPreview.astro ← Move .industries section
  WhyJayveecons.astro     ← Move .why section
  TrackRecord.astro       ← Move .track-record section
  CtaBand.astro           ← Move .cta-band section
```

Then `index.astro` becomes clean:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import HeroSection from '../components/home/HeroSection.astro';
// ...etc
---
<BaseLayout title="…" description="…" currentPath="/">
  <HeroSection />
  <TrustBar />
  <!-- etc -->
</BaseLayout>
```

### B. Use Astro's `client:visible` for the pipeline animation

The `.pipeline` scroll animation in index.astro uses a `<script>`. 
Move to a proper island:

```astro
<!-- In WhatWeDo.astro -->
<PipelineAnimation client:visible />
```

### C. Dynamic year calculation — move to server side

The `yearsOld` calculation currently runs client-side JS.
In Astro, do it in the frontmatter instead:

```astro
---
// In index.astro frontmatter
const yearsOld = new Date().getFullYear() - 1987;
---
<span>{yearsOld}+</span>
```

No JavaScript needed at all for this.

---

## 3️⃣ VISUAL IMPROVEMENTS — Quick Wins

### A. Add an OG/social image
Create a `public/images/og-default.jpg` (1200×630px) for social sharing previews.
Use a screenshot of your hero section with the logo overlaid.

### B. Favicon set
Generate favicons at https://realfavicongenerator.net using your logo.
Place in `public/`:
- `favicon.ico`
- `favicon-32.png`
- `favicon-16.png`  
- `apple-touch-icon.png`
- `site.webmanifest`

### C. Hero on mobile
The hero uses a 2-column grid. On mobile, the stats column should stack below:

```css
/* Add to your index.astro hero styles */
.hero-inner {
  grid-template-columns: 1fr;   /* mobile: single column */
}
@media (min-width: 900px) {
  .hero-inner {
    grid-template-columns: 1.1fr minmax(280px, 360px);
  }
}

/* Stats row on mobile */
.hero-stats {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
}
.hero-stat-card {
  flex: 1 1 calc(50% - 4px);   /* 2 per row on mobile */
}
@media (min-width: 640px) {
  .hero-stat-card { flex: 1; }  /* back to full-width column */
}
```

### D. Trust bar — wrap on mobile
```css
.trust-bar-inner {
  flex-wrap: wrap;
  justify-content: center;
}
.trust-item {
  border-right: none;
  border-bottom: 1px solid rgba(255,255,255,.1);
}
@media (min-width: 640px) {
  .trust-item {
    border-bottom: none;
    border-right: 1px solid rgba(255,255,255,.18);
  }
}
```

---

## 4️⃣ SEO — What's Already Done & What to Add

### Already done in BaseLayout.astro (upgraded):
✅ `<title>` — unique per page  
✅ `<meta name="description">` — unique per page  
✅ `<meta name="keywords">` — added  
✅ `<link rel="canonical">` — added  
✅ `<meta property="og:*">` — full Open Graph  
✅ `<meta name="twitter:*">` — Twitter card  
✅ JSON-LD Organization schema — on every page  
✅ `<link rel="sitemap">` — linked  
✅ `<meta name="robots">` — added  

### Still needed:

**1. Add `site` to astro.config.mjs** (done in upgraded file):
```js
site: 'https://www.jayveecons.com',
```

**2. Create `public/robots.txt`**:
```
User-agent: *
Allow: /
Disallow: /thank-you

Sitemap: https://www.jayveecons.com/sitemap-index.xml
```

**3. Add page-specific JSON-LD** (products page example):
```js
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "VECTOMEC™ Screw Conveyor",
  "manufacturer": { "@id": "https://www.jayveecons.com/#org" },
  "description": "Heavy-duty screw conveyor for bulk material handling"
}
```

**4. Update missing pages** — services.astro, about.astro, products.astro, industries.astro 
all need full `title` + `description` + `keywords` props passed to BaseLayout.

**5. Add `<meta name="keywords">` to BaseLayout** (done — now accepted as a prop):
```astro
<BaseLayout
  title="Services — Jayveecons"
  description="Engineering services including design, fabrication, erection…"
  keywords="engineering services India, material handling fabrication, kiln erection commissioning"
  currentPath="/services"
>
```

**6. Google Search Console**:
- Go to https://search.google.com/search-console
- Add property → URL prefix → https://www.jayveecons.com
- Verify via HTML tag method (add to BaseLayout `<head>`)
- Submit sitemap: https://www.jayveecons.com/sitemap-index.xml

---

## 5️⃣ EMAIL CONTACT FORM — Step-by-Step Setup

The updated `ContactForm.astro` uses **EmailJS** — works on static hosts with zero backend.

### Step 1: Create EmailJS account
Go to https://www.emailjs.com → Sign up FREE (200 emails/month free)

### Step 2: Add a Service (Gmail/Google Workspace)
- Dashboard → Email Services → Add New Service
- Choose **Gmail**
- Click **Connect Account** → sign in with **sales@jayveecons.com**
- Name it `jayveecons_gmail`, note the **Service ID** (e.g. `service_abc123`)

### Step 3: Create Email Template
- Dashboard → Email Templates → Create New Template
- **To email**: `sales@jayveecons.com` (and add `engineering@jayveecons.com` as CC)
- **From name**: `{{from_name}}`
- **Reply to**: `{{reply_to}}`
- **Subject**: `[RFQ] {{enquiry_type}} — {{company}} | {{from_name}}`
- **Body** (paste this):

```
New enquiry from Jayveecons website

CONTACT DETAILS
───────────────
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Role: {{designation}}

PROJECT DETAILS
───────────────
Enquiry Type: {{enquiry_type}}
Industry: {{industry}}
Products of Interest: {{products}}

PROJECT DESCRIPTION
───────────────────
{{message}}

───────────────
Submitted: {{submission_date}}
Reply directly to this email to reach {{from_name}}.
```

- Note your **Template ID** (e.g. `template_xyz789`)

### Step 4: Get your Public Key
- Dashboard → Account → General → **Public Key** (copy it)

### Step 5: Update ContactForm.astro
Replace the three placeholder values:

```js
const EMAILJS_PUBLIC_KEY  = 'user_abcXYZ123';     // ← your actual key
const EMAILJS_SERVICE_ID  = 'service_abc123';      // ← your service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789';     // ← your template ID
```

### Step 6: Test it!
- Run `npm run dev`
- Fill out the form and submit
- Check sales@jayveecons.com inbox (may take 1-2 minutes)
- Check EmailJS Dashboard → Email Logs to see sent emails

---

## 6️⃣ HOSTINGER DEPLOYMENT

### Option A: GitHub Actions (Automatic, Recommended)

**One-time setup:**

1. In your GitHub repo: **Settings → Secrets and variables → Actions**
2. Add these secrets:

| Secret Name | Where to find it in Hostinger |
|-------------|-------------------------------|
| `FTP_HOST`  | hPanel → Hosting → FTP Accounts → FTP Host |
| `FTP_USER`  | hPanel → Hosting → FTP Accounts → Username |
| `FTP_PASS`  | hPanel → Hosting → FTP Accounts → Password (create one) |
| `FTP_DIR`   | Usually `/public_html` — check your Hostinger hPanel |

3. The `.github/workflows/deploy.yml` file (in this package) does the rest.
4. Every time you push to `main`, GitHub automatically:
   - Builds your Astro site
   - Uploads `dist/` to Hostinger via FTP

**To trigger a manual deploy:** Go to GitHub → Actions → Build & Deploy → Run workflow

---

### Option B: Manual Upload (No automation)

1. Run locally: `npm run build`
2. This creates a `dist/` folder
3. Open Hostinger **hPanel → File Manager**
4. Navigate to `public_html/`
5. Upload ALL files from inside `dist/` (not the folder itself, the contents)
6. That's it — your site is live!

---

### Important Hostinger Settings

**Set up your domain:**
- hPanel → Domains → Point your domain to hosting

**Enable HTTPS:**
- hPanel → SSL → Install SSL Certificate → Let's Encrypt (free)

**Create `.htaccess` in `public/`** for clean URLs + security:
```apache
# public/.htaccess
# Redirect www to non-www (or vice versa — pick one)
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.jayveecons\.com [NC]
RewriteRule ^ https://jayveecons.com%{REQUEST_URI} [R=301,L]

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Cache static assets (1 year)
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|ico|woff2|svg)$">
  Header set Cache-Control "max-age=31536000, public, immutable"
</FilesMatch>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

---

## 🐛 BUG FIXES IN THIS UPGRADE

| Bug | File | Fix |
|-----|------|-----|
| Logo path `public/images/logo.png` (wrong — 404 on live) | `Nav.astro` | Changed to `/images/logo.png` |
| Footer logo also wrong path | `Footer.astro` | Change to `/images/logo.png` |
| `keywords` prop passed to BaseLayout but not used | `BaseLayout.astro` | Added `<meta name="keywords">` |
| No `<link rel="canonical">` | `BaseLayout.astro` | Added |
| No favicon | `BaseLayout.astro` | Added all favicon links |
| `dist/` folder committed to Git | `.gitignore` | Add `dist/` to `.gitignore` |
| `handleSubmit()` is undefined in ContactForm | `ContactForm.astro` | Fully implemented with EmailJS |
| Hero years counter resets to "39" on first render | `index.astro` | Compute in frontmatter instead of JS |

---

## 📦 PACKAGE.JSON UPDATES NEEDED

Run this to add the packages needed:
```bash
npm install --save-dev @astrojs/check typescript
```

Update your `package.json` scripts:
```json
{
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "check": "astro check"
  }
}
```

---

## ✅ LAUNCH CHECKLIST

Before going live, verify:

- [ ] Logo loads correctly on all pages (no 404 in browser console)
- [ ] Mobile nav works (burger opens/closes, Escape key works)
- [ ] Contact form sends email to your Google Workspace inbox
- [ ] All pages have unique titles and descriptions
- [ ] OG image exists at `/images/og-default.jpg`
- [ ] Favicon shows in browser tab
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] Sitemap accessible at `/sitemap-index.xml`
- [ ] HTTPS is working (no mixed content warnings)
- [ ] Google Search Console property verified
- [ ] Sitemap submitted to Google Search Console
- [ ] Run Lighthouse audit in Chrome DevTools (aim for 90+ on all metrics)
- [ ] Test on real mobile device (not just browser DevTools)

---

*Generated for Jayveecons Group — jayveecons.com*
