# UGUTU Community Foundation — Website

A static marketing site for UGUTU Community Foundation, built with [Astro](https://astro.build).
The structure mirrors a clean NGO brochure site: **Home → About → Programs → Get Involved → Contact**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build for production

```bash
npm run build    # outputs static files to ./dist
npm run preview  # preview the built site locally
```

The `dist/` folder is plain static HTML/CSS/JS — deploy it to Netlify, Vercel,
Cloudflare Pages, GitHub Pages, or any static host.

## Where to edit content

Almost all text lives in one file:

- **`src/data/site.js`** — org name, vision, mission, programs, team, contact
  details, navigation. Edit here and every page updates.

Pages and layout:

- `src/pages/` — one file per page (`index`, `about`, `programs`, `get-involved`, `contact`)
- `src/layouts/BaseLayout.astro` — shared HTML shell, meta tags
- `src/components/` — `Header`, `Footer`, `Icon`
- `src/styles/global.css` — colours, fonts, spacing (the design system)

## Adding photos

The coloured blocks marked "Add a photo…" are placeholders (`.ph` in the CSS).
To use a real image, drop files in `public/images/` and replace a placeholder
`<div class="ph">…</div>` with:

```html
<img src="/images/your-photo.jpg" alt="Describe the photo" class="split__media" />
```

## Still to confirm (marked TODO in `src/data/site.js`)

- Contact email and phone number
- Social media links (Facebook / Instagram / YouTube)
- Donation channel (mobile money / bank / online platform)
- Real photographs
