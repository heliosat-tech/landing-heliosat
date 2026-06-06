# HelioSat — Landing Page

Marketing landing page for **HelioSat**, a deep-tech startup building a space
weather forecasting engine for satellite operators. The page has a single goal:
get qualified visitors to **book a demo call**.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com),
output as a fully static site, ready to deploy on Vercel. No backend, no
database, no forms — the only conversion action is the **Request a demo** button,
which links to a Calendly booking page.

---

## Tech stack

- **Astro 4** — static site generator, zero client JS by default
- **Tailwind CSS 3** — styling, with a small custom theme (deep-navy + a single
  warm "solar" accent)
- **@fontsource-variable/inter** — self-hosted Inter (no external font requests)
- **@astrojs/sitemap** — generates `sitemap-index.xml` for SEO

The only JavaScript shipped is a tiny inline scroll-reveal script (≈1 KB) that
respects `prefers-reduced-motion`.

---

## Getting started

Requires **Node.js 18+** (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:4321)
npm run dev

# 3. Build the static site to ./dist
npm run build

# 4. Preview the production build locally
npm run preview
```

| Command           | Action                                          |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Start local dev server at `localhost:4321`      |
| `npm run build`   | Build the production site to `./dist`           |
| `npm run preview` | Serve the built `./dist` locally to sanity-check |

---

## Project structure

```
.
├── astro.config.mjs        # Astro config (site URL, integrations)
├── tailwind.config.mjs     # Tailwind theme (colors, fonts, animations)
├── public/
│   ├── favicon.svg         # SVG favicon (placeholder mark)
│   ├── og-image.svg        # Open Graph image (placeholder — see TODO below)
│   └── robots.txt
└── src/
    ├── consts.ts           # Site metadata + the Calendly demo URL
    ├── styles/global.css   # Backdrop, buttons, scroll-reveal, design primitives
    ├── layouts/
    │   └── BaseLayout.astro # <head>, SEO/OG tags, fonts, reveal script
    ├── components/
    │   ├── Navbar.astro
    │   ├── Hero.astro
    │   ├── Problem.astro
    │   ├── Solution.astro        # "How it works" — 3-step pilot workflow
    │   ├── WhyHelioSat.astro     # Credibility (ex-NASA + Imperial College)
    │   ├── UseCases.astro
    │   ├── FinalCTA.astro
    │   ├── Footer.astro
    │   ├── DemoButton.astro      # Reusable "Request a demo" CTA
    │   └── OrbitGraphic.astro    # Hero line-art orbital SVG
    └── pages/
        └── index.astro      # The single page; composes all sections
```

---

## Customizing copy & content

The page ships with **strong placeholder copy**. Anywhere a product specific is
not yet locked, there's a `<!-- TODO -->` comment in the source. Search the repo
for `TODO` to find every spot that needs your input:

```bash
grep -rn "TODO" src public astro.config.mjs
```

Key things to set before launch:

- **`src/consts.ts`** — site URL, contact email, LinkedIn URL, and the
  `DEMO_URL` (currently `https://calendly.com/heliosat-technologies/30min`).
- **`astro.config.mjs`** — `site` (your production domain). This drives
  canonical URLs, Open Graph URLs, and the sitemap.
- **`public/og-image.svg`** — a placeholder Open Graph card. Most social
  scrapers prefer a raster image, so **export a final 1200×630 PNG/JPG**, drop
  it in `public/`, and update the `og:image` reference in
  `src/layouts/BaseLayout.astro` and `SITE.ogImage` in `src/consts.ts`.
- **Section copy** — headlines and body text live directly in the component
  files under `src/components/`.

### Theme

Colors, fonts, and animations are defined in `tailwind.config.mjs`. The accent
("solar" amber) and the deep-navy surfaces are the two levers for rebranding.

---

## Deploying to Vercel

This is a static Astro site — Vercel detects and builds it automatically.

### Option A — Vercel Dashboard (Git import)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In the [Vercel dashboard](https://vercel.com/new), **Import** the repository.
3. Vercel auto-detects Astro. Confirm the settings:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Every push to the main branch redeploys automatically.

### Option B — Vercel CLI

```bash
# Install the CLI (once)
npm i -g vercel

# From the project root: preview deploy
vercel

# Promote to production
vercel --prod
```

After deploying, set your custom domain in Vercel and update `site` in
`astro.config.mjs` (and the `Sitemap:` line in `public/robots.txt`) to match.

---

## Accessibility & performance notes

- Semantic HTML landmarks (`header`, `main`, `footer`, `nav`), a skip-to-content
  link, and labelled sections.
- Decorative SVGs are marked `aria-hidden`; meaningful controls have accessible
  names.
- Color contrast tuned for the dark theme; keyboard focus rings are visible.
- No render-blocking external requests (fonts are self-hosted); near-zero JS.
- Animations are disabled under `prefers-reduced-motion`.
